const fetch = require('node-fetch');

const NETWORKS = {
    polygon: { name: 'Polygon', chainId: 137 },
    bnb: { name: 'BNB Smart Chain', chainId: 56 }
};

const cache = new Map();
const CACHE_DURATION = 3600000; // 1 hora

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const walletAddress = event.queryStringParameters?.address;
    const network = event.queryStringParameters?.network || 'polygon';

    if (!walletAddress) {
        return { statusCode: 400, body: 'Missing wallet address' };
    }

    if (!NETWORKS[network]) {
        return { statusCode: 400, body: 'Invalid network. Use polygon or bnb' };
    }

    // Cache check
    const cacheKey = `${network}_${walletAddress}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
            body: JSON.stringify({ ageDays: cached.ageDays, firstTxDate: cached.firstTxDate, fromCache: true })
        };
    }

    const chainId = NETWORKS[network].chainId;
    const API_KEY = process.env.ETHERSCAN_API_KEY;

    if (!API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Missing ETHERSCAN_API_KEY' })
        };
    }

    const url = `https://api.etherscan.io/v2/api?chainid=${chainId}&module=account&action=txlist&address=${walletAddress}&sort=asc&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== '1' || !data.result || data.result.length === 0) {
            return {
                statusCode: 200,
                body: JSON.stringify({ ageDays: null, hasActivity: false })
            };
        }

        const firstTx = data.result[0];
        const firstTxTimestamp = parseInt(firstTx.timeStamp) * 1000;
        const ageInDays = Math.floor((Date.now() - firstTxTimestamp) / (1000 * 60 * 60 * 24));
        const firstTxDate = new Date(firstTxTimestamp).toLocaleDateString();

        cache.set(cacheKey, { ageDays: ageInDays, firstTxDate: firstTxDate, timestamp: Date.now() });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
            body: JSON.stringify({ ageDays: ageInDays, firstTxDate: firstTxDate, hasActivity: true })
        };
    } catch (error) {
        console.error("Error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
    }
};
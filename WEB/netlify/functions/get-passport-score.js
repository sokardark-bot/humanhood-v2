const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const walletAddress = event.queryStringParameters?.address;
    if (!walletAddress) {
        return { statusCode: 400, body: 'Missing wallet address' };
    }

    const API_KEY = process.env.GITCOIN_API_KEY;
    const SCORER_ID = process.env.GITCOIN_SCORER_ID;

    if (!API_KEY || !SCORER_ID) {
        console.error("Missing API Key or Scorer ID in environment variables.");
        return { statusCode: 500, body: 'Server configuration error' };
    }

    const url = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${walletAddress}`;
    
    try {
        const response = await fetch(url, {
            headers: { 'X-API-Key': API_KEY }
        });
        
        if (!response.ok) {
            return { statusCode: response.status, body: await response.text() };
        }

        const data = await response.json();
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ score: data.score })
        };
    } catch (error) {
        console.error("Error fetching from Gitcoin:", error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
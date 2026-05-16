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

    // ✅ URL CORREGIDA según la documentación oficial
    const url = `https://api.passport.xyz/v2/stamps/${SCORER_ID}/score/${walletAddress}`;
    
    try {
        const response = await fetch(url, {
            headers: { 'X-API-KEY': API_KEY }  // ← Nota: el header es 'X-API-KEY', no 'X-API-Key'
        });
        
        if (!response.ok) {
            return { statusCode: response.status, body: await response.text() };
        }

        const data = await response.json();
        
        // La respuesta incluye el score, el umbral, etc.
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                score: data.score || 0,
                passing_score: data.passing_score,
                threshold: data.threshold
            })
        };
    } catch (error) {
        console.error("Error fetching from Gitcoin Passport:", error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
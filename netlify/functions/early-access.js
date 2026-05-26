// netlify/functions/early-access.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = new URLSearchParams(event.body);
        const email = body.get('email');

        if (!email) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Email required' }) };
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        const emailContent = {
            from: `Humanhood <info@humanhood.tech>`,
            to: [email],
            subject: '🎁 Humanhood Early Access - Demo en testnet',
            headers: {
                'X-Priority': '1',
                'Importance': 'high'
            },
            html: `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body style="font-family: 'Inter', Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 16px 16px 0 0;">
                        <h2 style="color: white; margin: 0;">🎁 Welcome to Humanhood!</h2>
                        <p style="color: white; opacity: 0.9; margin: 8px 0 0 0;">¡Bienvenido a Humanhood!</p>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 16px 16px;">
                        
                        <!-- ENGLISH -->
                        <div style="border-bottom: 2px solid #667eea20; padding-bottom: 20px; margin-bottom: 20px;">
                            <h3 style="color: #0f172a; margin: 0 0 16px 0;">🇬🇧 Testnet Demo</h3>
                            <p style="color: #334155; margin: 0 0 16px 0;">Try Humanhood on <strong>Polygon Amoy testnet</strong>. Verification is simulated (always true).</p>
                            <p style="margin: 16px 0;">
                                <a href="https://humanhood.tech/demo.html" style="background: #667eea; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">🧪 Try testnet demo →</a>
                            </p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>📋 Testnet contract:</strong></p>
                                <code style="background: #0f172a; padding: 8px; border-radius: 6px; display: block; word-break: break-all;">0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8</code>
                            </div>
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">📝 Integration code</h4>
                            <pre style="background: #0f172a; padding: 16px; border-radius: 8px; color: #68d391; overflow-x: auto; font-size: 12px;">interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}

function claimReward() external {
    require(
        IHumanhood(0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8).checkHuman(msg.sender),
        "Not verified as human"
    );
}</pre>
                            <p style="font-size: 12px; color: #64748b;">ℹ️ On testnet, checkHuman() returns true for ALL wallets (simulation).</p>
                        </div>
                        
                        <!-- SPANISH -->
                        <div style="border-bottom: 2px solid #667eea20; padding-bottom: 20px; margin-bottom: 20px;">
                            <h3 style="color: #0f172a; margin: 0 0 16px 0;">🇪🇸 Demo en testnet</h3>
                            <p style="color: #334155; margin: 0 0 16px 0;">Prueba Humanhood en <strong>Polygon Amoy testnet</strong>. La verificación es simulada (siempre true).</p>
                            <p style="margin: 16px 0;">
                                <a href="https://humanhood.tech/demo.html" style="background: #667eea; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">🧪 Probar demo testnet →</a>
                            </p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>📋 Contrato testnet:</strong></p>
                                <code style="background: #0f172a; padding: 8px; border-radius: 6px; display: block; word-break: break-all;">0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8</code>
                            </div>
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">📝 Código de integración</h4>
                            <pre style="background: #0f172a; padding: 16px; border-radius: 8px; color: #68d391; overflow-x: auto; font-size: 12px;">interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}

function claimReward() external {
    require(
        IHumanhood(0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8).checkHuman(msg.sender),
        "No verificado como humano"
    );
}</pre>
                            <p style="font-size: 12px; color: #64748b;">ℹ️ En testnet, checkHuman() devuelve true para TODAS las wallets (simulación).</p>
                        </div>
                        
                        <!-- RESOURCES -->
                        <div style="margin-bottom: 24px;">
                            <h4 style="color: #0f172a; margin: 0 0 8px 0;">📚 Resources / Recursos</h4>
                            <ul style="color: #334155; margin: 0; padding-left: 20px;">
                                <li>📖 <a href="https://humanhood.tech/docs.html" style="color: #667eea;">Documentation / Documentación</a></li>
                                <li>📧 <a href="mailto:info@humanhood.tech" style="color: #667eea;">info@humanhood.tech</a></li>
                            </ul>
                        </div>
                        
                        <!-- FOOTER WITH LOGO (CENTERED ON MOBILE) -->
                        <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; text-align: center;">
                            <div style="display: inline-block; text-align: center;">
                                <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="11" r="5" stroke="#667eea" stroke-width="2" fill="none"/>
                                        <path d="M8 16 L12 13 L12 19 L8 16Z" fill="#667eea"/>
                                        <path d="M24 16 L20 13 L20 19 L24 16Z" fill="#667eea"/>
                                        <circle cx="10" cy="22" r="2" fill="#667eea"/>
                                        <circle cx="22" cy="22" r="2" fill="#667eea"/>
                                    </svg>
                                    <span style="font-weight: 700; font-size: 18px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; background-clip: text; color: transparent;">Humanhood</span>
                                </div>
                                <p style="color: #64748b; font-size: 12px; margin: 0;">
                                    Decentralized human verification<br>
                                    Verificación humana descentralizada<br>
                                    <a href="https://humanhood.tech" style="color: #667eea;">humanhood.tech</a>
                                </p>
                                <p style="color: #94a3b8; font-size: 10px; margin-top: 16px;">
                                    © 2026 Humanhood. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailContent)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error sending email:', errorText);
            return { statusCode: 500, body: JSON.stringify({ error: 'Error sending email' }) };
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ success: true })
        };

    } catch (error) {
        console.error('Function error:', error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
    }
};
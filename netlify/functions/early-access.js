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
            subject: '🎁 Humanhood Early Access - 1,000 free queries / 1,000 consultas gratis',
            headers: {
                'X-Priority': '1',
                'Importance': 'high'
            },
            html: `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body style="font-family: 'Inter', Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
                    
                    <!-- HEADER -->
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 16px 16px 0 0;">
                        <h2 style="color: white; margin: 0;">🎁 Welcome to Humanhood!</h2>
                        <p style="color: white; opacity: 0.9; margin: 8px 0 0 0;">¡Bienvenido a Humanhood!</p>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 16px 16px;">
                        
                        <!-- ENGLISH SECTION -->
                        <div style="border-bottom: 2px solid #667eea20; padding-bottom: 20px; margin-bottom: 20px;">
                            <h3 style="color: #0f172a; margin: 0 0 16px 0;">🇬🇧 Early Access</h3>
                            <p style="color: #334155; margin: 0 0 16px 0;">Thank you for signing up. Here's everything you need to start testing <strong>for free</strong>.</p>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">🧪 Option 1: Technical testing on testnet (simulated)</h4>
                            <p style="color: #334155; margin: 0 0 8px 0;">Use our <strong>testnet demo</strong> to test the integration without real users:</p>
                            <p style="margin: 8px 0;">
                                <a href="https://humanhood.tech/demo.html" style="background: #667eea; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-block;">🧪 Try testnet demo →</a>
                            </p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>ℹ️ How it works:</strong></p>
                                <p style="margin: 0; font-size: 14px;">On testnet (Polygon Amoy), <code>checkHuman()</code> returns <strong>true for ALL wallets</strong>. This is perfect for testing your integration without needing real user verification. Gitcoin Passport does NOT work on testnets.</p>
                            </div>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">✅ Option 2: Real testing on Mainnet (recommended)</h4>
                            <p style="color: #334155; margin: 0 0 8px 0;">We give you <strong>1,000 free queries on Polygon Mainnet</strong>. Your users can verify with Gitcoin Passport (real verification).</p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>📋 Mainnet contract:</strong></p>
                                <code style="background: #0f172a; padding: 8px; border-radius: 6px; display: block; word-break: break-all;">0x2A7396876a13812fEFc5773094f217d5380FEeB9</code>
                                <p style="margin: 12px 0 0 0;"><strong>🌐 Network:</strong> Polygon Mainnet (Chain ID: 137)</p>
                            </div>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">📝 Integration code (Mainnet)</h4>
                            <pre style="background: #0f172a; padding: 16px; border-radius: 8px; color: #68d391; overflow-x: auto; font-size: 12px;">interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}

function claimReward() external {
    require(
        IHumanhood(0x2A7396876a13812fEFc5773094f217d5380FEeB9).checkHuman(msg.sender),
        "Not verified as human"
    );
}</pre>
                        </div>
                        
                        <!-- SPANISH SECTION -->
                        <div style="border-bottom: 2px solid #667eea20; padding-bottom: 20px; margin-bottom: 20px;">
                            <h3 style="color: #0f172a; margin: 0 0 16px 0;">🇪🇸 Acceso anticipado</h3>
                            <p style="color: #334155; margin: 0 0 16px 0;">Gracias por registrarte. Aquí tienes todo lo que necesitas para empezar a probar <strong>gratis</strong>.</p>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">🧪 Opción 1: Pruebas técnicas en testnet (simulada)</h4>
                            <p style="color: #334155; margin: 0 0 8px 0;">Usa nuestra <strong>demo en testnet</strong> para probar la integración sin usuarios reales:</p>
                            <p style="margin: 8px 0;">
                                <a href="https://humanhood.tech/demo.html" style="background: #667eea; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-block;">🧪 Probar demo testnet →</a>
                            </p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>ℹ️ Cómo funciona:</strong></p>
                                <p style="margin: 0; font-size: 14px;">En testnet (Polygon Amoy), <code>checkHuman()</code> devuelve <strong>true para TODAS las wallets</strong>. Es perfecto para probar tu integración sin necesidad de verificación real. Gitcoin Passport NO funciona en testnets.</p>
                            </div>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">✅ Opción 2: Pruebas reales en Mainnet (recomendado)</h4>
                            <p style="color: #334155; margin: 0 0 8px 0;">Te damos <strong>1,000 consultas gratis en Polygon Mainnet</strong>. Tus usuarios se verifican con Gitcoin Passport (verificación real).</p>
                            <div style="background: #e2e8f0; padding: 16px; border-radius: 12px; margin: 16px 0;">
                                <p style="margin: 0 0 8px 0;"><strong>📋 Contrato en Mainnet:</strong></p>
                                <code style="background: #0f172a; padding: 8px; border-radius: 6px; display: block; word-break: break-all;">0x2A7396876a13812fEFc5773094f217d5380FEeB9</code>
                                <p style="margin: 12px 0 0 0;"><strong>🌐 Red:</strong> Polygon Mainnet (Chain ID: 137)</p>
                            </div>
                            
                            <h4 style="color: #0f172a; margin: 20px 0 8px 0;">📝 Código de integración (Mainnet)</h4>
                            <pre style="background: #0f172a; padding: 16px; border-radius: 8px; color: #68d391; overflow-x: auto; font-size: 12px;">interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}

function claimReward() external {
    require(
        IHumanhood(0x2A7396876a13812fEFc5773094f217d5380FEeB9).checkHuman(msg.sender),
        "No verificado como humano"
    );
}</pre>
                        </div>
                        
                        <!-- RESOURCES -->
                        <div style="margin-bottom: 24px;">
                            <h4 style="color: #0f172a; margin: 0 0 8px 0;">📚 Resources / Recursos</h4>
                            <ul style="color: #334155; margin: 0; padding-left: 20px;">
                                <li>📖 <a href="https://humanhood.tech/docs.html" style="color: #667eea;">Documentation / Documentación</a></li>
                                <li>🧪 <a href="https://humanhood.tech/demo.html" style="color: #667eea;">Testnet Demo / Demo en testnet</a></li>
                                <li>📧 <a href="mailto:info@humanhood.tech" style="color: #667eea;">info@humanhood.tech</a> - Support / Soporte</li>
                            </ul>
                        </div>
                        
                        <!-- FOOTER WITH LOGO -->
                        <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; text-align: center;">
                            <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 16px;">
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
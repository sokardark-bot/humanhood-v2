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
            subject: '🎁 Tu acceso a Humanhood - 1,000 consultas gratis',
            html: `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body style="font-family: 'Inter', Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 16px 16px 0 0;">
                        <h2 style="color: white; margin: 0;">🎁 ¡Bienvenido a Humanhood!</h2>
                    </div>
                    <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 16px 16px;">
                        <p style="color: #334155;">Gracias por registrarte en el early access. Aquí tienes todo lo que necesitas para empezar a probar <strong>gratis</strong>.</p>
                        
                        <h3 style="color: #0f172a;">📋 Credenciales de prueba (testnet - gratis)</h3>
                        <ul style="color: #334155;">
                            <li><strong>Red:</strong> Polygon Amoy (testnet)</li>
                            <li><strong>Chain ID:</strong> 80002</li>
                            <li><strong>Contrato:</strong> <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8</code></li>
                            <li><strong>Consultas:</strong> 1,000 gratis (sin límite real en testnet)</li>
                        </ul>
                        
                        <h3 style="color: #0f172a;">🔧 Cómo probar</h3>
                        <ol style="color: #334155;">
                            <li>Obtén POL gratis del <a href="https://faucet.polygon.technology/" style="color: #667eea;">faucet de Polygon</a></li>
                            <li>Integra nuestro contrato en tu proyecto con 3 líneas de código</li>
                        </ol>
                        
                        <h3 style="color: #0f172a;">📝 Código de integración (testnet)</h3>
                        <pre style="background: #0f172a; padding: 16px; border-radius: 8px; color: #68d391; overflow-x: auto;">interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}

function claimReward() external {
    require(
        IHumanhood(0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8).checkHuman(msg.sender),
        "No verificado como humano"
    );
}</pre>
                        
                        <h3 style="color: #0f172a;">📚 Recursos</h3>
                        <ul style="color: #334155;">
                            <li>📖 <a href="https://humanhood.tech/docs.html" style="color: #667eea;">Documentación completa</a></li>
                            <li>📧 <a href="mailto:info@humanhood.tech" style="color: #667eea;">info@humanhood.tech</a> - Soporte</li>
                        </ul>
                        
                        <hr style="border-color: #e2e8f0; margin: 24px 0;">
                        <p style="color: #64748b; font-size: 12px; text-align: center;">
                            Humanhood - Verificación humana descentralizada<br>
                            <a href="https://humanhood.tech" style="color: #667eea;">humanhood.tech</a>
                        </p>
                    </div>
                </body>
                </html>
            `
        };

        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailContent)
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ success: true })
        };

    } catch (error) {
        console.error('Error:', error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
    }
};
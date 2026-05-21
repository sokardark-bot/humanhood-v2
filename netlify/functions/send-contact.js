// netlify/functions/send-contact.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
    // Solo aceptar POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parsear los datos del formulario
        const body = new URLSearchParams(event.body);
        const nombre = body.get('nombre');
        const email = body.get('email');
        const proyecto = body.get('proyecto') || 'No especificado';
        const mensaje = body.get('mensaje');

        // Validar campos requeridos
        if (!nombre || !email || !mensaje) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Faltan campos requeridos' })
            };
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        
        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY no está configurada');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Configuración del servidor incompleta' })
            };
        }

        // Email para el administrador (info@humanhood.tech)
        const emailToAdmin = {
            from: `Humanhood <info@humanhood.tech>`,
            to: ['sokardark@gmail.com'],
            subject: `📬 Nuevo contacto de ${nombre}`,
            reply_to: email,
            html: `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #667eea;">📬 Nuevo mensaje desde humanhood.tech</h2>
                    <hr>
                    <p><strong>👤 Nombre:</strong> ${escapeHtml(nombre)}</p>
                    <p><strong>📧 Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>🚀 Proyecto:</strong> ${escapeHtml(proyecto)}</p>
                    <p><strong>💬 Mensaje:</strong></p>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                        ${escapeHtml(mensaje).replace(/\n/g, '<br>')}
                    </div>
                    <hr>
                    <p style="color: #666; font-size: 12px;">Puedes responder directamente a este email. El destinatario será ${escapeHtml(email)}</p>
                </body>
                </html>
            `
        };

        // Email de confirmación para el usuario
        const emailToUser = {
            from: `Humanhood <info@humanhood.tech>`,
            to: [email],
            subject: '✅ Hemos recibido tu mensaje - Humanhood',
            html: `
                <!DOCTYPE html>
                <html>
                <head><meta charset="UTF-8"></head>
                <body style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #667eea;">✅ ¡Gracias por contactarnos, ${escapeHtml(nombre)}!</h2>
                    <p>Hemos recibido tu mensaje y te responderemos en menos de <strong>24 horas</strong>.</p>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0;"><strong>Tu mensaje:</strong></p>
                        <p style="margin: 10px 0 0 0;">${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
                    </div>
                    <hr>
                    <p style="color: #666; font-size: 12px;">
                        Humanhood - Verificación humana descentralizada<br>
                        <a href="https://humanhood.tech" style="color: #667eea;">humanhood.tech</a>
                    </p>
                </body>
                </html>
            `
        };

        // Enviar email al administrador
        const resAdmin = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailToAdmin)
        });

        // Enviar email de confirmación al usuario
        const resUser = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailToUser)
        });

        if (!resAdmin.ok) {
            const errorText = await resAdmin.text();
            console.error('Error Resend (admin):', errorText);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Error al enviar el email' })
            };
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ success: true, message: 'Email sent' })
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error interno del servidor: ' + error.message })
        };
    }
};

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
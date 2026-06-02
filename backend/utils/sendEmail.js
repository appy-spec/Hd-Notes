const { BrevoClient } = require("@getbrevo/brevo");

const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
});

async function sendEmail(to, subject, text) {
    try {
        const result = await brevo.transactionalEmails.sendTransacEmail({
            subject: subject,

            textContent: text,

            sender: {
                name: "Hd Note",
                email: process.env.EMAIL_USER,
            },

            to: [
                {
                    email: to,
                },
            ],
        });

        return result;

    } catch (error) {
        
        console.error("Brevo Error:", error);
        throw error;
    }
}

module.exports = sendEmail;
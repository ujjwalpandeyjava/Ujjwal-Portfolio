import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST || "smtp.hostinger.com",
	port: parseInt(process.env.EMAIL_PORT || "465"),
	secure: true, // Required for port 465
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
	authMethod: 'PLAIN',
	tls: {
		rejectUnauthorized: false
	}
});

/**
 * Reusable email sender utility
 * @param {Object} options - Email configuration options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML string for the email body
 * @param {string} [options.bcc] - Blind carbon copy address
 * @param {string} [options.replyTo] - Address for 'Reply-To' header
 * @param {'high' | 'normal' | 'low'} [options.priority] - Email priority
 *
 * * @returns {Promise<{success: boolean, messageId: string}>}
 * @throws {Error} If environment variables are missing or SMTP fails
 */
export const sendEmail = async ({ to, subject, html, bcc, replyTo, priority = 'normal', attachments }) => {
	// 1. Validate environment variables
	if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
		throw new Error("Mail Utility: Missing EMAIL_USER or EMAIL_PASS in environment variables.");
	}
	// 2. Build the email configuration object
	const mailOptions = {
		from: `"Ujjwal Pandey" <${process.env.EMAIL_USER}>`,
		to,
		subject,
		html,
		priority, // Sets the 'X-Priority' header
		...(bcc && { bcc }),           // Only add bcc if it exists
		...(replyTo && { replyTo }),   // Only add replyTo if it exists
		...(attachments && { attachments }), // Add attachments if they exist
	};
	try {
		// 3. Attempt to send the email
		const info = await transporter.sendMail(mailOptions);
		console.log(`Email sent successfully: ${info.messageId}`);
		return { success: true, messageId: info.messageId };

	} catch (error) {
		console.error("--- Mail Utility Error ---");
		console.error("To:", to);
		console.error("Error Code:", error.code); // e.g., EAUTH
		console.error("Response:", error.response);
		console.error("--------------------------");
		return { success: false, messageId: `Failed to send email: ${error.code} - ${error.message}` };
	}
};
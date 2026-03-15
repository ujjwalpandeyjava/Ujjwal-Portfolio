import { OFFICIAL_SUPPORT_EMAIL } from '@/utils/Constants';
import { sendEmail } from '@/lib/mail';
import { NextResponse } from 'next/server';


/**
 * Handle POST requests for the contact form.
 * @param {Request} request - The incoming request object containing the contact form data.
 */
export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, message } = body;

		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ success: false, message: 'Missing required fields' },
				{ status: 400 }
			);
		}


		const resp = await sendEmail({
			to: [OFFICIAL_SUPPORT_EMAIL],
			replyTo: [email],
			subject: `Message from ${name}`,
			html: generateSupportEmailHtml(name, email, message)
		});

		return NextResponse.json({
			success: true,
			message: email ? resp.messageId : "No email"
		}, { status: resp.success ? 200 : 500 });

	} catch (error) {
		console.error('Contact API Error:', error);
		return NextResponse.json(
			{ message: 'Server Error' },
			{ status: 500 }
		);
	}
}

/**
 * Generates a professional HTML template for support emails.
 * @param {string} name - Sender's name.
 * @param {string} email - Sender's email.
 * @param {string} message - The content of the message.
 * @returns {string} Styled HTML string.
 */
const generateSupportEmailHtml = (name, email, message) => {
	const year = new Date().getFullYear();

	return `
	<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
		<div style="background-color: #228be6; padding: 20px; text-align: center;">
			<h1 style="color: white; margin: 0; font-size: 24px;">New Support Inquiry</h1>
		</div>
		<div style="padding: 30px; line-height: 1.6; color: #333;">
			<p style="font-size: 16px;">Hello <strong>Ujjwal Pandey</strong>,</p>
			<p>You have received a new message through the official contact form. Here are the details:</p>

			<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
				<tr>
					<td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Sender:</td>
					<td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
				</tr>
				<tr>
					<td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
					<td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}"
							style="color: #228be6;">${email}</a></td>
				</tr>
			</table>

			<div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #228be6; border-radius: 4px;">
				<p style="margin-top: 0; font-weight: bold; color: #495057;">Message Content:</p>
				<p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
			</div>
		</div>
		<div style="background-color: #f1f3f5; padding: 15px; text-align: center; font-size: 12px; color: #868e96;">
			<p style="margin: 0;">&copy; ${year} Ujjwal Portfolio. All rights reserved.</p>
			<p style="margin: 5px 0 0;">This email was generated automatically by the Next.js Support System.</p>
		</div>
	</div>
  `;
};
import { OFFICIAL_SUPPORT_EMAIL } from '@/utils/Constants';
import { sendEmail } from '@/lib/mail';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const escapeHtml = (unsafe) => {
	if (typeof unsafe !== 'string') return '';
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};

/**
 * Handle POST requests for the contact form with defensive validation,
 * rate limiting, bot trapping, and information-leak prevention.
 * @param {Request} request
 */
export async function POST(request) {
	try {
		// 1. Origin / Referer Validation (Prevent cross-site invocation abuse)
		const origin = request.headers.get('origin');
		const host = request.headers.get('host');

		if (origin && host) {
			try {
				const originHost = new URL(origin).host;
				if (originHost !== host) {
					return NextResponse.json(
						{ success: false, message: 'Forbidden request origin' },
						{ status: 403 }
					);
				}
			} catch (_) {
				return NextResponse.json(
					{ success: false, message: 'Invalid origin header' },
					{ status: 403 }
				);
			}
		}

		// 2. IP-based Rate Limiting (Prevent mail server quota exhaustion)
		const clientIp = getClientIp(request);
		const rateLimit = checkRateLimit(clientIp, {
			limit: 5,
			windowMs: 10 * 60 * 1000 // 5 submissions per 10 minutes per IP
		});

		if (!rateLimit.allowed) {
			return NextResponse.json(
				{
					success: false,
					message: `Too many submissions. Please wait ${Math.ceil(rateLimit.retryAfterSeconds / 60)} minute(s) before trying again.`
				},
				{
					status: 429,
					headers: {
						'Retry-After': String(rateLimit.retryAfterSeconds)
					}
				}
			);
		}

		// 3. Payload Extraction
		const body = await request.json().catch(() => null);
		if (!body || typeof body !== 'object') {
			return NextResponse.json(
				{ success: false, message: 'Invalid JSON payload' },
				{ status: 400 }
			);
		}

		const { name, email, message, _gotcha } = body;

		// 4. Honeypot check (Silent discard of bot submissions)
		if (_gotcha && String(_gotcha).trim().length > 0) {
			console.warn(`[Security] Bot honeypot triggered by IP: ${clientIp}`);
			// Return deceptive 200 OK without triggering SMTP transport
			return NextResponse.json({
				success: true,
				message: 'Message sent successfully!'
			});
		}

		// 5. Input Field Presence & Type Validation
		if (
			typeof name !== 'string' ||
			typeof email !== 'string' ||
			typeof message !== 'string'
		) {
			return NextResponse.json(
				{ success: false, message: 'Missing or invalid required fields' },
				{ status: 400 }
			);
		}

		const trimmedName = name.trim();
		const trimmedEmail = email.trim();
		const trimmedMessage = message.trim();

		if (!trimmedName || !trimmedEmail || !trimmedMessage) {
			return NextResponse.json(
				{ success: false, message: 'Please fill in all required fields' },
				{ status: 400 }
			);
		}

		// 6. Length Bounds Validation
		if (trimmedName.length > 100 || trimmedName.length < 2) {
			return NextResponse.json(
				{ success: false, message: 'Name must be between 2 and 100 characters' },
				{ status: 400 }
			);
		}

		if (trimmedEmail.length > 150 || !EMAIL_REGEX.test(trimmedEmail)) {
			return NextResponse.json(
				{ success: false, message: 'Please provide a valid email address' },
				{ status: 400 }
			);
		}

		if (trimmedMessage.length > 3000 || trimmedMessage.length < 5) {
			return NextResponse.json(
				{ success: false, message: 'Message must be between 5 and 3000 characters' },
				{ status: 400 }
			);
		}

		// 7. HTML Encoding for Email Client Rendering
		const safeName = escapeHtml(trimmedName);
		const safeEmail = escapeHtml(trimmedEmail);
		const safeMessage = escapeHtml(trimmedMessage);

		// 8. SMTP Dispatch
		const resp = await sendEmail({
			to: [OFFICIAL_SUPPORT_EMAIL],
			replyTo: [trimmedEmail],
			subject: `Message from ${safeName}`,
			html: generateSupportEmailHtml(safeName, safeEmail, safeMessage)
		});

		if (!resp.success) {
			// Log real error internally; NEVER leak SMTP provider exceptions to the client
			console.error(`[Contact API Error] SMTP failure for ${trimmedEmail}:`, resp.messageId);
			return NextResponse.json(
				{
					success: false,
					message: 'Failed to send message. Please try again later or contact me directly.'
				},
				{ status: 500 }
			);
		}

		return NextResponse.json({
			success: true,
			message: 'Message sent successfully!'
		}, { status: 200 });

	} catch (error) {
		console.error('[Contact API Fatal Error]:', error);
		return NextResponse.json(
			{
				success: false,
				message: 'An unexpected server error occurred. Please try again later.'
			},
			{ status: 500 }
		);
	}
}

/**
 * Generates an HTML template for support emails.
 * @param {string} name - Sanitized sender name.
 * @param {string} email - Sanitized sender email.
 * @param {string} message - Sanitized message body.
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
			<p>You have received a new message through your portfolio contact form. Here are the details:</p>

			<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
				<tr>
					<td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Sender:</td>
					<td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
				</tr>
				<tr>
					<td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
					<td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #228be6;">${email}</a></td>
				</tr>
			</table>

			<div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #228be6; border-radius: 4px;">
				<p style="margin-top: 0; font-weight: bold; color: #495057;">Message Content:</p>
				<p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
			</div>
		</div>
		<div style="background-color: #f1f3f5; padding: 15px; text-align: center; font-size: 12px; color: #868e96;">
			<p style="margin: 0;">&copy; ${year} Ujjwal Portfolio. All rights reserved.</p>
			<p style="margin: 5px 0 0;">Generated automatically by portfolio support system.</p>
		</div>
	</div>
  `;
};
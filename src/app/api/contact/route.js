import { OFFICIAL_SUPPORT_EMAIL } from '@/utils/Constants';
import { sendEmail } from '@/lib/mail';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		const body = await request.json();
		console.log(body);
		const { name, email, message } = body;

		const resp = await sendEmail({
			to: [OFFICIAL_SUPPORT_EMAIL],
			replyTo: [email],
			subject: `Message from ${name}`,
			html: `
			<p>Dear Ujjwal Pandey,</p>
			<p>${name} has contacted us with the following message:</p>
			<p>${message}</p>
			`
		});
		return NextResponse.json({
			success: true,
			message: email ? resp.messageId : "No email"
		}, { status: resp.success ? 200 : 500 });
	} catch (error) {
		return NextResponse.json({ message: 'Server Error' }, { status: 500 });
	}
}
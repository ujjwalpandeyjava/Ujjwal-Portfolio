import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, message, token } = body;

		// 1. Verify the token with Google
		const secretKey = process.env.RECAPTCHA_SECRET_KEY;

		const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
		const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
		const recaptchaData = await recaptchaRes.json();

		if (!recaptchaData.success) {
			return NextResponse.json({ message: 'Invalid Captcha' }, { status: 400 });
		}

		// 2. (Optional) Send Email here using Nodemailer or Resend
		console.log("Verified User:", name, email, message);

		return NextResponse.json({ message: 'Success!' }, { status: 200 });

	} catch (error) {
		return NextResponse.json({ message: 'Server Error' }, { status: 500 });
	}
}
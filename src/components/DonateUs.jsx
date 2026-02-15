"use client";

import { RAZORPAY_KEY_ID_CONST_UI } from '@/utils/Constants';
import siteLog from '@/statics/images/SiteLogo.jpg';
import "@/styles/donate-us.scss";
import { Button, Container, SimpleGrid, Text, TextInput, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import Script from 'next/script';
import { useState } from 'react';
import { IoCashOutline, IoHeartOutline } from "react-icons/io5";

export default function DonateUs({ callBackFun }) {
	const [selectedAmount, setSelectedAmount] = useState(500);
	const [customAmount, setCustomAmount] = useState('');
	const [isCustom, setIsCustom] = useState(false);
	const [optional, setOptional] = useState({ name: "", email: "" });
	const [loading, setLoading] = useState(false)

	const handlePresetClick = (amt) => {
		setSelectedAmount(amt);
		setIsCustom(false);
		setCustomAmount('');
	};

	const handleCustomClick = () => {
		setIsCustom(true);
		setSelectedAmount(null);
	};


	const startDonationProcess = async () => {
		const amount = isCustom ? customAmount || '0' : selectedAmount
		if (amount < 1) return;
		setLoading(true);
		const donarName_ = optional.name || "Unknown";
		try {
			// Step 1: Create an Order on the backend
			const orderRes = await fetch('/api/create-order-donation', {
				method: 'POST',
				body: JSON.stringify({
					amount: amount,
					donarName: donarName_,
					donarEmail: optional.email
				}),
			});
			const orderData = await orderRes.json();

			if (!orderRes.ok)
				throw new Error("Donation order creation failed");

			// Step 2: Open Razorpay Checkout
			const options = {
				key: RAZORPAY_KEY_ID_CONST_UI,
				amount: orderData.amount,
				currency: "INR",
				name: "Ujjwal Pandey",
				description: `Ujjwal Pandey - Received Donation from: ${amount}`,
				image: siteLog,
				order_id: orderData.id || orderData.receipt,
				handler: async function (response) { // successful payment
					await sendNotificationEmail(response.razorpay_payment_id, amount, donarName_, optional.email);
				},
				prefill: {
					name: donarName_,
					email: optional.email
				},
				theme: { color: "#1cd68fff" },
				modal: { ondismiss: () => setLoading(false) }
			};

			const rzp = new window.Razorpay(options);
			rzp.open();
		} catch (error) {
			console.error("Payment Error:", error);
			notifications.show({ title: 'Payment initialization failed', color: 'red' });
			setLoading(false);
		}
	}
	const sendNotificationEmail = async (paymentId, amount, name, email) => {
		try {
			// Step 3: Send Email (now including payment ID)
			const response = await fetch('/api/email-donation-accepted', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ paymentId, amount, name, email }),
			});
			if (response.ok) {
				const data = await response.json();
				if (data.success)
					notifications.show({
						title: `Thank you for donating ₹${amount}!`,
						message: `Receipt ID: ${paymentId}. Email sent.`,
						color: 'green'
					});
				else
					notifications.show({
						title: `Thank your for donation`,
						message: `Receipt ID: ${paymentId}.`,
						color: 'green'
					});
				if (callBackFun) callBackFun();
			}
		} catch (error) {
			notifications.show({ title: 'Donation received.', color: 'orange' });
		} finally {
			setLoading(false);
		}
	};



	return (
		<section id="donate-section">
			<Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
			<Container size="sm" py={80}>
				<div className="donate-card">
					<div className="donate-header">
						<div className="icon-circle"><IoHeartOutline /></div>
						<Title order={2}>Support Our Mission</Title>
						<Text c="dimmed">Your contribution directly funds educational resources and talent identification for deserving students.</Text>
					</div>

					<div className="amount-selector">
						<Text fw={600} size="sm" mb={15} c="dimmed" ta="center">CHOOSE AN AMOUNT (₹)</Text>

						<div className="chips-flex">
							{[100, 200, 350, 500, 1000].map((amt) => <button key={amt} className={`chip ${selectedAmount === amt ? 'active' : ''}`} onClick={() => handlePresetClick(amt)}>₹{amt}</button>)}
							<button className={`chip ${isCustom ? 'active' : ''}`} onClick={handleCustomClick}>Custom</button>
						</div>

						{isCustom && <div className="custom-input-wrapper">
							<TextInput placeholder="Enter custom amount" type="number" variant="filled" size="md" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} leftSection={<IoCashOutline />} />
						</div>}

						<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt="sm">
							<TextInput placeholder="Your Name" type="text" variant="filled" value={optional.name} onChange={(e) => setOptional(old => ({ ...old, name: e.target.value }))} />
							< TextInput placeholder="Your Email" type="email" variant="filled" value={optional.email} onChange={(e) => setOptional(old => ({ ...old, email: e.target.value }))} />
						</SimpleGrid>
					</div>

					<Button loading={loading} fullWidth onClick={startDonationProcess} size="lg" className="donate-submit-btn" disabled={isCustom && !customAmount}>Donate ₹{isCustom ? customAmount || '0' : selectedAmount} Now</Button>

					<Text size="xs" c="dimmed" ta="center" mt="md">All donations are 80G tax-exempt. A receipt will be sent to your email.</Text>
				</div>
			</Container>
		</section>
	);
}
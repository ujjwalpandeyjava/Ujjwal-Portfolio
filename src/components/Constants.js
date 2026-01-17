import { FaCircleInfo } from "react-icons/fa6";
import { IoHome, IoPersonSharp } from "react-icons/io5";

export const OFFICIAL_SUPPORT_EMAIL = process.env.EMAIL_USER
export const RAZORPAY_KEY_ID_CONST_UI = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_FE
export const RAZORPAY_KEY_SECRET_CONST = process.env.RAZORPAY_KEY_SECRET

export const navLinks = [
	{ link: '/', label: 'Home', icon: IoHome, showIcon: false },
	{ link: '/resume', label: 'Resume', icon: FaCircleInfo, showIcon: true },
	{ link: '/contact', label: 'Contact', icon: IoPersonSharp, showIcon: true },
];

export const projectLinks = [
	{ label: 'Education programs', link: '/gallery' },
	{ label: 'Success story', link: '/gallery' },
]
export const office = {
	address: { title: "Registered office", label: 'H.No,184,Main Road Ibrahimganj Bhopal 462001 Madhya Pradesh', link: '#footer' },
	coordinates: {
		latitude: 23.319672780699857,
		longitude: 77.41139570085053
	}
}

// export const testimonialsList = [
// 	{ image: TestimonialsImage1, name: 'Dr. Chaitanya Vyas', designation: 'Assistant Professor', comment: `Dummy` },
// 	{ image: TestimonialsImage2, name: 'Ujjwal Pandey', designation: 'The Builder', comment: `Dummy` },
// 	{ image: TestimonialsImage3, name: 'Prince Mishra', designation: 'Programming Tech', comment: `Dummy` }
// ];

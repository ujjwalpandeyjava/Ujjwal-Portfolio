import { FaImages } from 'react-icons/fa';
import { FaCircleInfo } from "react-icons/fa6";
import { HiOutlineLightBulb, HiOutlinePresentationChartLine, HiOutlineUserGroup } from 'react-icons/hi';
import { ImBooks } from "react-icons/im";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions, MdOutlineSettingsSuggest } from "react-icons/md";

// images for testimonials
import TestimonialsImage3 from "@/statics/images/TestimonialsImage-1.jpg";
import TestimonialsImage2 from "@/statics/images/TestimonialsImage-2.jpg";
import TestimonialsImage1 from "@/statics/images/TestimonialsImage-3.png";

// Members
import member_1 from "@/statics/images/member_1.png";
import member_2 from "@/statics/images/member_2.png";
import member_3 from "@/statics/images/member_3.png";

// Gallery images
import gallery_1 from "@/statics/images/gallery/gallery_1.jpeg";
import gallery_2 from "@/statics/images/gallery/gallery_2.jpeg";
import gallery_3 from "@/statics/images/gallery/gallery_3.jpeg";
import gallery_4 from "@/statics/images/gallery/gallery_4.jpeg";
import gallery_5 from "@/statics/images/gallery/gallery_5.jpeg";
import gallery_6 from "@/statics/images/gallery/gallery_6.jpeg";
import gallery_7 from "@/statics/images/gallery/gallery_7.jpeg";
import gallery_8 from "@/statics/images/gallery/gallery_8.jpeg";
import awardsImg from "@/statics/images/awards.jpg";
import exam1 from "@/statics/images/exam1.jpg";
import exam2 from "@/statics/images/exam2.jpg";
import registration from "@/statics/images/registration.jpg";



import { FaWpforms } from "react-icons/fa";

export const navLinks = [
	{ link: '/', label: 'Home', icon: IoHome, showIcon: false },
	{ link: '/gallery', label: 'Gallery', icon: FaImages, showIcon: true },
	{ link: '/exams-forms', label: 'Exams', icon: ImBooks, showIcon: true },
	{ link: '/contact-us', label: 'Contact Us', icon: IoPersonSharp, showIcon: true },
	{ link: '/about-us', label: 'About us', icon: FaCircleInfo, showIcon: true },
];

export const projectLinks = [
	{ label: 'Education programs', link: '/gallery' },
	{ label: 'Success story', link: '/gallery' },
]
export const officeAddresses = [
	{ title: "Registered office", label: 'H.No,184,Main Road Ibrahimganj Bhopal 462001 Madhya Pradesh', link: '#footer' },
	{ title: "Corporate Add", label: 'Plot No,39,40 New Chouksey Nagar Bhopal Near Mk Ponda College 462038 Madhya Pradesh', link: '#footer' },
	// { title: "Since", label: 'Foundation date', link: '#footer' },
]


export const officeCoordinates = {
	latitude: 23.319672780699857,
	longitude: 77.41139570085053
};
// Testimonials
export const testimonialsList = [
	{ image: TestimonialsImage1, name: 'Dr. Chaitanya Vyas', designation: 'Assistant Professor', comment: `Dummy` },
	{ image: TestimonialsImage2, name: 'Ujjwal Pandey', designation: 'The Builder', comment: `Dummy` },
	{ image: TestimonialsImage3, name: 'Prince Mishra', designation: 'Programming Tech', comment: `Dummy` }
];


// Team Members
export const TEAM_MEMBERS = [
	{
		name: "Deepak Arya",
		designation: "Founder & President",
		image: member_2,
		// linkedin: "https://linkedin.com/in/jaspreet",
	},
	{
		name: "Uma Arya",
		designation: "Vice President",
		image: member_1,
		// linkedin: "https://linkedin.com/in/piyush",
	},
	{
		name: "Prince Mishra",
		designation: "Managing Director",
		image: member_3,
		// linkedin: "https://linkedin.com/in/apoorva",
	}
];

// Email for contact form
export const OFFICIAL_SUPPORT_EMAIL = process.env.EMAIL_USER
export const RAZORPAY_KEY_ID_CONST_UI = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_FE
export const RAZORPAY_KEY_SECRET_CONST = process.env.RAZORPAY_KEY_SECRET

export const GALLERY_IMAGES = [
	{ title: "", src: gallery_1, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_2, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_3, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_4, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_5, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_6, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_7, alt: "Gallery Image 1", description: `` },
	{ title: "", src: gallery_8, alt: "Gallery Image 1", description: `` }
]

// Steps for ProcessFlow component
export const WORK_FLOW_PROCESS = [
	{
		id: "01",
		title: "Registration",
		icon: <FaWpforms />,
		desc: "Online or offline registration for the qualifying exam."
	},
	{
		id: "02",
		title: "Qualifying Exam",
		icon: <HiOutlineLightBulb />,
		desc: "Secure minimum marks to qualify for the final round."
	},
	{
		id: "03",
		title: "Final Exam",
		icon: <MdOutlineSettingsSuggest />,
		desc: "Shortlisted students appear for the final-level exam."
	},
	{
		id: "04",
		title: "Results & Awards ",
		icon: <MdOutlineEmojiEmotions />,
		desc: "Certificates, recognition, and prizes for top performers."
	},
];
export const WORK_FLOW_PROCESS_STEPS_DATA = [
	{
		id: '01',
		title: 'Registration',
		description: 'Begin your journey by completing the official registration form. Submit basic details and choose your preferred examination track.',
		color: '#E91E63', // Pink
		image: registration,
		hasPrice: true
	},
	{
		id: '02',
		title: 'Qualifying Examination',
		description: 'Demonstrate your foundational knowledge in the preliminary qualification round. This assessment evaluates core concepts, logical reasoning, and subject understanding.',
		color: '#339AF0', // Blue
		image: exam1
	},
	{
		id: '03',
		title: 'Final Examination',
		description: 'Shortlisted candidates appear for the final-level examination, designed to assess advanced understanding and problem-solving abilities in a structured and fair manner.',
		color: '#FF922B', // Orange
		image: exam2
	},
	{
		id: '04',
		title: 'Results & Awards',
		description: 'The top 1st, 2nd, and 3rd rank holders in each class receive merit-based cash prizes and certificates, the next top 100 students are awarded educational goodies, and all remaining participants receive participation recognition.',
		color: '#51CF66', // Green
		image: awardsImg
	}
];

export const AboutUsMilestones = [
	{
		icon: <HiOutlineLightBulb />,
		title: "Our Vision",
		text: "To bridge the educational gap by providing every student, from Grade 1 to 10, with a clear roadmap of their academic potential."
	},
	{
		icon: <HiOutlinePresentationChartLine />,
		title: "What We Did",
		text: "Since our inception, we have conducted over 500+ assessment drives, reaching remote schools to ensure no talent goes unnoticed."
	},
	{
		icon: <HiOutlineUserGroup />,
		title: "How We Came Here",
		text: "Starting as a small group of educators, we evolved into a national NGO after seeing the need for standardized evaluation beyond classrooms."
	},
	{
		icon: <HiOutlineLightBulb />,
		title: "Our Impact",
		text: "Recognized and awarded 10,000+ top-performing students with scholarships and resources to fuel their future dreams."
	}
];


// NOTICE
export const NOTICE_LIST = [
	{ text: "Registration for upcoming Drevita Foundation academic assessments will open soon for Grades 1–10.", date: "12/12/2025 06:20 pm", expired: false },
	{ text: "Details regarding the assessment structure, syllabus, and eligibility criteria will be announced shortly.", date: "12/12/2025 1:20 pm", expired: false },
	{ text: "Schools and institutions interested in collaboration or student participation may contact us for preliminary information.", date: "12/12/2025 2:20 pm", expired: false },
	{ text: "Study resources and guidance materials will be made available on the website prior to the examination cycle.", date: "12/12/2025 4:20 pm", expired: false },
	{ text: "Important instructions related to registration, assessments, and student guidelines will be published on this Notice Board regularly.", date: "12/12/2025 12:20 pm", expired: false },
	{ text: "Instructions for the upcoming online evaluation portal login updated.", date: "12/12/2025 12:20 pm", expired: true },
	{ text: "Top 100 students of the last quarter to receive certificates at the Head Office.", date: "12/12/2025 12:20 pm", expired: true },
	{ text: "Thank you for being a part of our mission to evaluate and empower students!", date: "12/12/2025 08:20 am", expired: true },
];

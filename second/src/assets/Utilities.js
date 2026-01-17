import { toast } from 'react-toastify';
import configs from '../../package.json';



export const homePath = configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)

export const isMobileDevice = () => /android|iphone|ipad|blackberry|mobile|webos|opera mini/i.test(navigator.userAgent.toLowerCase())

export const email = "ujjwalpandey.aps@gmail.com";

export const copyEmailToClipboard = () => {
	navigator.clipboard.writeText(email)
		.then(() => {
			// alert(`Email copied!:\n${email}`);
			toast.success("Email copied successfully!");
		});
};
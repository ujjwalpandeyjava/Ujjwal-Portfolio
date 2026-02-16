import floatingImage from '@/statics/images/developer1.svg';
import '@/styles/home.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
	return (
		<div className="home-container">
			<div className="who-i-am">
				<div className="name-calling">Hi There!!</div>
				<div className="name-im">I am <span>Ujjwal Pandey</span></div>
				<div className="name-web-d">I am a Web Developer</div>

				<div className="action-container">
					<Link id="downloadCV" target="_blank" href="https://drive.google.com/open?id=1Fd1J4wcibypnPVL8RmYCfhVo0LVIMbJr" >Resume</Link>
					<Link href="/contact">Contact me</Link>
				</div>
			</div>

			<div>
				<Image src={floatingImage} alt="It's me" priority className="myAvatar" />
			</div>
		</div>
	)
};
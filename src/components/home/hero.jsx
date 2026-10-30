import '@/styles/home.scss';
import Link from 'next/link';
import ParticleBg from '@/components/ParticleBg';
import InteractiveAvatar from './InteractiveAvatar';

const Hero = () => {
	return (
		<div className="home-container">
			<ParticleBg />
			<div className="who-i-am">
				<div className="name-calling">Hi There!!</div>
				<div className="name-im">I am <span>Ujjwal Pandey</span></div>
				<div className="name-web-d">Full Stack &amp; AI Engineer</div>

				<div className="action-container">
					<Link id="downloadCV" target="_blank" href="https://drive.google.com/file/d/1Fd1J4wcibypnPVL8RmYCfhVo0LVIMbJr/view" >Resume</Link>
					<Link href="/contact" prefetch={true}>Contact me</Link>
				</div>
			</div>

			<div className="hero-avatar-wrapper">
				<InteractiveAvatar />
			</div>
		</div>
	)
};
export default Hero;

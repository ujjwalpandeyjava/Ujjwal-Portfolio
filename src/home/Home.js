import  { Fragment, useState } from 'react'
import myPicture from '../images/no-bg-UjjwalPandey.png'
import floatingImage from '../images/ujjwalAvatar1Copy.png';
import SocialIcons from '../socialIcons'
import ImageCarousel from '../imageCarousel/ImageCarousel';

function Home() {
	let [scrollerDisplaying, setScrollerDisplaying] = useState("flex")  // flex/none
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (currentScrollPos > 120 && scrollerDisplaying === "flex")
			setScrollerDisplaying("none")
		else if (currentScrollPos < 120 && scrollerDisplaying === "none")
			setScrollerDisplaying("flex")
	}
	const scrollBy50vh = () => {
		window.scrollBy(0, 550);
	}
	return (
		<Fragment>
			<div id="home" className="home">
				<div className="whoIAm">
					<div className="name">Who I AM?
					</div>
					<div className="wrapper">
						<div className="static-txt">I am a &#9;</div>
						<ul className="dynamic-texts">
							<li><span>😉 Full-Stack Dev.</span></li>
							<li><span>Java Developer</span></li>
							<li><span>Front-end Dev.</span></li>
							<li><span>Back-end Dev.</span></li>
						</ul>
					</div>
					<SocialIcons />
					<img id="myAvatar" src={floatingImage} alt="It's me" />
				</div>
				<div className="whoIamPic">
					<img src={myPicture} alt="It me Ujjwal Pandey" />
					<ImageCarousel />
				</div>
				<section id="scroller" style={{ "display": scrollerDisplaying }} onClick={() => scrollBy50vh()}>
					<p>Scroll Down</p>
					<div><span>&bull;</span></div>
				</section>
			</div>
		</Fragment>
	)
}

export default Home;
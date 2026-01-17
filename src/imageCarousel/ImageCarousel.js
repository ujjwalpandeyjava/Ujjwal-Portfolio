import { useEffect, useRef, useState } from 'react';
import AdJavaImage from '../images/AdvancedJava.png';
import cssImage from '../images/css.jpg';
import dsAlgoImage from '../images/dsalog.jfif';
import etcImage from '../images/etc.png';
import GoogleCloudImage from '../images/Google_Cloud.png';
import gitImage from '../images/git.png';
import hibernateImage from '../images/hibernate.png';
import htmlImage from '../images/html.jpeg';
import javaImage from '../images/java.jpg';
import jsImage from '../images/js.jpg';
import mongoDBImage from '../images/mongoDB.png';
import msOfficeImage from '../images/msOffice.jfif';
import MySQLImage from '../images/mySQL.jpg';
import reactImage from '../images/ReactJS.jpg';
import restAPIImage from '../images/restAPI.png';
import springImage from '../images/spring1.jpg';
import figma from '../images/figma.png';
import eclipseIDE from '../images/eclipse_IDE.jpeg';
import vsCode from '../images/VS_Code.png';
import jQuery from '../images/jQuery.png';
import sfImage from '../images/salesforce.png';
import postman from '../images/postman.png';
import springBoot from '../images/springBoot.png';
import styles from './ImageCarousel.css';


const imageInCarouse = [
	htmlImage,
	cssImage,
	dsAlgoImage,

	javaImage,
	AdJavaImage,
	hibernateImage,
	springImage,
	springBoot,

	restAPIImage,
	mongoDBImage,
	MySQLImage,

	sfImage,

	jsImage,
	jQuery,
	reactImage,

	postman,
	gitImage,
	figma,

	vsCode,
	eclipseIDE,

	GoogleCloudImage,
	msOfficeImage,
	etcImage,
];
const images = {
	imageWidth: 130,
	images: [...imageInCarouse, ...imageInCarouse, ...imageInCarouse, ...imageInCarouse]
};

export default function SkillsImageCarousel() {
	const [currentIndex, setCurrentIndex] = useState(-15);
	const carouselImages = useRef(null);


	useEffect(() => {
		carouselImages.current = setInterval(() => {
			setCurrentIndex((prevIndex) => ((prevIndex + images.imageWidth <= images.imageWidth * (images.images.length - 1)) ? (prevIndex + images.imageWidth) : 0));
		}, 2500);

		return () => {
			clearInterval(carouselImages.current)
			carouselImages.current = null;
		};
	}, []);


	return (
		<div className={styles.imageCarousel}>
			<div className={styles.imageList} style={{ width: images.images.length * images.imageWidth + "px", transform: `translateX(-${currentIndex}px)` }}>
				{images.images.map((imageUrl, index) =>
					<div key={"skill-" + (index + 1)} className={styles.imageItem}>
						<img src={imageUrl} alt={`i ${index + 1}`} style={{ width: `${images.imageWidth}px`, maxWidth: `${images.imageWidth}px` }} />
					</div>
				)}
			</div>
		</div>
	);
};
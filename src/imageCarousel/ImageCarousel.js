import React, { useEffect, useState } from 'react';
import './ImageCarousel.css'; // Import your CSS file
import AdJavaImage from '../images/AdvancedJava.jfif';
import cssImage from '../images/css.jpg';
import dsAlgoImage from '../images/dsalog.jfif';
import etcImage from '../images/etc.jfif';
// import GAEImage from '../images/GAE.jpg';
// import GoogleCloudImage from '../images/Google_Cloud.png';
import gitImage from '../images/git.jfif';
import hibernateImage from '../images/hibernate.png';
import htmlImage from '../images/html.jpg';
import javaImage from '../images/java.jpg';
import jsImage from '../images/js.jpg';
import mongoDBImage from '../images/mongoDB.png';
import msOfficeImage from '../images/msOffice.jfif';
import MySQLImage from '../images/mySQL.jpg';
import reactImage from '../images/ReactJS.jpg';
import restAPIImage from '../images/restAPI.jfif';
import springImage from '../images/spring1.jpg';
import figma from '../images/figma.png';
import eclipseIDE from '../images/eclipse_IDE.jfif';
import vsCode from '../images/VS_Code.png';
import jQuery from '../images/jQuery.png';
import sfImage from '../images/salesforce.png';
import postman from '../images/postman.png';
import springBoot from '../images/springBoot.png';

const imageInCarouse = [AdJavaImage,
	htmlImage,
	cssImage,
	dsAlgoImage,
	
	javaImage,
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
	
	// GAEImage,
	// GoogleCloudImage,
	msOfficeImage,
	etcImage,
];
const images = {
	imageWidth: 130,
	images: [...imageInCarouse, ...imageInCarouse, ...imageInCarouse, ...imageInCarouse]
};

const ImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(-15);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => ((prevIndex + images.imageWidth <= images.imageWidth * (images.images.length - 1)) ? (prevIndex + images.imageWidth) : 0));
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="image-carousel">
			<div className="image-list" style={{
				width: images.images.length * images.imageWidth + "px",
				transform: `translateX(-${currentIndex}px)`
			}}>
				{images.images.map((imageUrl, index) => (
					<div key={"skill-" + (index + 1)} className="image-item">
						<img src={imageUrl} alt={`i ${index + 1}`} style={{ width: `${images.imageWidth}px`, maxWidth: `${images.imageWidth}px` }} />
					</div>
				))}
			</div>
		</div >
	);
};

export default ImageCarousel;

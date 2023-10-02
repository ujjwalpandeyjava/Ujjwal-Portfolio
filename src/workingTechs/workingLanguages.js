import { Fragment } from "react";
import AdJavaImage from '../images/AdvancedJava.png';
import  htmlCssImage from '../images/css.jpg';
import dsAlgoImage from '../images/dsalog.jfif';
import GoogleCloudImage from '../images/Google_Cloud.png';
import gitImage from '../images/git.png';
import hibernateImage from '../images/hibernate.png';
import javaImage from '../images/java.jpg';
import jsImage from '../images/js.jpg';
import mongoDBImage from '../images/mongoDB.png';
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
import etcImage from '../images/etc.png';
import EachSkill from "./EachSkill";


const listOfSkills = [
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Java",
		url: javaImage,
		alt: "Java"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Advanced+Java",
		url: AdJavaImage,
		alt: "Advanced java"
	},
	{
		show: true,
		googleURL:
			"http://www.google.com/search?q=Spring",
		url: springImage,
		alt: "Spring"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Spring+Boot",
		url: springBoot,
		alt: "Spring Boot"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Hibernate",
		url: hibernateImage,
		alt: "Hibernate"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=RestApi",
		url: restAPIImage,
		alt: "Rest API"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=JS",
		url: jsImage,
		alt: "JavaScript"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=CSS",
		url:  htmlCssImage,
		alt: "CSS"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=jQuery",
		url: jQuery,
		alt: "jQuery"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=React",
		url: reactImage,
		alt: "ReactJS"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=DS-Algo",
		url: dsAlgoImage,
		alt: "DS-Algo"
	},
	{
		show: true,
		googleURL: "https://www.google.com/search?q=google+cloud",
		url: GoogleCloudImage,
		alt: "Google Cloud"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Figma+UI/UI",
		url: figma,
		alt: "Figma UI/UX designs"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Git",
		url: gitImage,
		alt: "Git"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=MySQL",
		url: MySQLImage,
		alt: "MySQL"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=MongoDB",
		url: mongoDBImage,
		alt: "MongoDB"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=Postmantocheck_API",
		url: postman,
		alt: "postman to check API"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=salesforce",
		url: sfImage,
		alt: "Salesforce"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=VSCode",
		url: vsCode,
		alt: "Visual Studio Code"
	},
	{
		show: false,
		googleURL: "http://www.google.com/search?q=front+and+back+end+frameworks",
		url: etcImage,
		alt: "others on need"
	},
	{
		show: true,
		googleURL: "http://www.google.com/search?q=eclipse+IDE",
		url: eclipseIDE,
		alt: "Eclipse IDE"
	},
];

export default function WorkingLanguages() {
	return (
		<Fragment>
			<div className="workingWith">
				<h2 id="workH3">Technical skills <sub><i>Click for details</i></sub></h2>
				<div className="skillSet">
					{listOfSkills.map((eachSkill, index) =>
						< EachSkill eachSkill={eachSkill} indexing={index + 1} />
					)}
				</div >
			</div >
		</Fragment >
	)
}
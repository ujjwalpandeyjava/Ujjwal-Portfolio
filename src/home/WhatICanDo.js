import frontEnd from "../images/whatICanDo/FrontEnd.png";
import backend from "../images/whatICanDo/FrontEnd2.png";
import dataBase  from "../images/whatICanDo/buildServer.png";
import jsAll from "../images/whatICanDo/buildServer2.png";
import whatICanDoCSS from './WhatICanDo.module.css';
function WhatICanDo() {

	return (
		<div className={whatICanDoCSS.abilitiesSection}>
			<h1>My proficiency</h1>
			<div className={whatICanDoCSS.abilities}>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={backend} alt="Server side coding" />
					<div>Back-end</div>
					<p>The sole of web/portal, building the server with most intelligent language and framework to provide best industry standard codes.
						Java, Spring MVC, Spring boot, Hibernate, MongoDB, MySQL</p>
				</div>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={frontEnd} alt="Server side coding" />
					<div>Front-end</div>
					<p>It is very important to make user feels good while intreating with the site.
						I develope mind blowing UI/UX with best practices in HTML, CSS, ReactJs,JS, SCSS, and libraries.</p>
				</div>	
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={dataBase} alt="Server side coding" />
					<div>DataBase management</div>
					<p>Maintaining and structuring the data is one of the most crucial task a backend developer do,
						Giving me the plus hand in comparison. 
					</p>
				</div>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={jsAll} alt="Backend coding with js" />
					<div>JavaScript For everything</div>
					<p>In this decade building the web from frontend to backend all is possible in JavaScript,
						I an good with building the full stack web with JS, in  NodeJs, Express, MongoDB, MySQL</p>
				</div>
			</div>
		</div>
	)
}

export default WhatICanDo
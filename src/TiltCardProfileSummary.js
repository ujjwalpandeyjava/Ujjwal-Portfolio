import React, { Fragment, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import './frag.css'

function TiltCardProfileSummary(props) {
	// console.log(props, percent);
	// function startTilt() {
	useEffect(() => {	// It will call everytime the component is called or refresed
		VanillaTilt.init(document.querySelector(".tiltableElement"), {	// https://micku7zu.github.io/vanilla-tilt.js/  <-- Documentation
			max: 20,
			speed: 300
		});
		// console.log("useEffect Called");
		VanillaTilt.init(document.querySelectorAll(".tiltableElement"));	//It also supports NodeList
	});
	return (
		// {startTilt();}
		<Fragment >
			<div className="tiltableElement" style={{ border: '1px solid red', minHeight: '300px', minWidth: '200px', maxWidth: '400px' }}>
				Profile Summary Card<br /> 
				Will add soon, after deploying download previewing section
			</div>
		</Fragment>
	)
}

export default TiltCardProfileSummary;
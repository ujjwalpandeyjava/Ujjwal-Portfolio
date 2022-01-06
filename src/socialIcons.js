import React, { Fragment } from "react";


export default function SocialIcons(props) {
	return (
		<Fragment>
			<div className="socialIcons">
				<div className="icon">
					<div className="tooltip">Facebook</div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip">Twitter</div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip">LinkedIn</div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip">Instagram</div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip">Github</div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
				</div>
			</div>
		</Fragment>
	)
}
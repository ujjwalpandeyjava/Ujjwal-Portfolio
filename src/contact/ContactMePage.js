import React from 'react'
import ContactMe from './contactMe';
import connectImg from './doItTogether.svg'

function ContactMePage() {
	return (
		<div>
			<img src={connectImg} style={{maxHeight: "45vh", margin: 'auto', display: 'block'}} alt='Connect me' />
			<ContactMe />
		</div>
	)
}

export default ContactMePage;
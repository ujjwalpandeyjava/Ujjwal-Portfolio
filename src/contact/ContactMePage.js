import React from 'react'
import ContactMe from './contactMe';
import connectImg from './doItTogether.svg'
// import SocialIcons from '../utility/SocialIcons'

function ContactMePage() {
	return (
		<div>
			<img src={connectImg} style={{ maxHeight: "45vh", margin: 'auto', display: 'block' }} alt='Connect me' />
			{/* <SocialIcons /> */}
			<ContactMe />
		</div>
	)
}

export default ContactMePage;
import React from 'react';
import './contact.css';
import contact from '../../assets/contact.png';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<h2 className="section__heading">Contact</h2>
			<p className="section__subheading">Where to find me!</p>

			<div className="contact__container flex">
				<form className="contact__input flex">
					<label htmlFor="name" className="label">
						Name
					</label>
					<input type="text" name="name" id="name" />
					<label htmlFor="email" className="label">
						Email
					</label>
					<input type="text" name="email" id="email" />
					<label htmlFor="text" className="label">
						Message
					</label>
					<textarea name="text" id="text" rows="5" />
					<input className="button" type="submit" value="Send Mail" />
				</form>
				<div className="contact__image flex">
					<img src={contact} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Contact;

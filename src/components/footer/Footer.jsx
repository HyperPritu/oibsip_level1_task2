import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__container flex">
				<div className="footer__links flex">
					<FaFacebook size={40} />
					<FaInstagram size={40} />
					<FaGithub size={40} />
				</div>
				<p className="footer__copyright">&copy; HyperPritu</p>
			</div>
		</section>
	);
};

export default Footer;

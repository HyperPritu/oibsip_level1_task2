import React from 'react';
import './navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container flex">
				<p className="logo">John Doe</p>
				<div className="navbar__links flex">
					<a href="#about" className="navbar__links-link active-link">
						About
					</a>
					<a href='#projects' className="navbar__links-link">Projects</a>
					<a href='#contact' className="navbar__links-link">Contact</a>
				</div>
				<div className="button">Resume</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React from 'react';
import './about.css';

const About = () => {
	return (
		<section id='about' className="about">
			<div className="about__container flex">
				<div className="about__image flex">
					<img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
				</div>
				<div className="about__body flex">
					<h2 className="section__heading">About Me</h2>
					<p className="section__subheading">A breif introduction about myself</p>

					<p className="about__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus exercitationem nemo, ab necessitatibus sed maiores voluptatem error doloribus iusto nobis, laudantium deleniti, consequatur iste nostrum libero aspernatur asperiores nam!</p>
				</div>
			</div>
		</section>
	);
};

export default About;

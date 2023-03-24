import React from 'react';
import './projects.css';
import Data from './ProjectData';
import Card from '../card/Card';

const Projects = () => {
	return (
		<section id='projects' className="projects">
			<h2 className="section__heading">Projects</h2>
			<p className="section__subheading">My work experience</p>

			<div className="projects__container flex">
				{Data.map(({ id, url, name }) => {
					return <Card key={id} img={url} name={name} />;
				})}
			</div>
		</section>
	);
};

export default Projects;

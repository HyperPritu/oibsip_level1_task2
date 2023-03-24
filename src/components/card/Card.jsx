import React from 'react';
import './card.css';

const Card = ({ img, name }) => {
	return (
		<div className="card__container">
			<img src={img} alt="" />
			<div className="card__actions">
				<span className="card__top-left"></span>
				<p className="card__title">{name}</p>
				<span className="card__bottom-right"></span>
			</div>
		</div>
	);
};

export default Card;

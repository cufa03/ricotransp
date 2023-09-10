import React from 'react';
import image from './truck-logo.png';
import './styles.css';

const Logo = () => {
	return (
		<div className="navbar__logo">
			<img alt="Truck" src={image} />
		</div>
	);
};

export default Logo;

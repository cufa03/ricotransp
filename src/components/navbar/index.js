import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/Logo';
import NavLinks from './navMenu';

import './styles.css';
const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/">
						<Logo />
					</Link>
					<NavLinks />
				</div>
			</nav>
		</>
	);
};

export default Navbar;

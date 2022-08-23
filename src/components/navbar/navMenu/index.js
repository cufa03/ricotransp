import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './styles.css';
const NavLinks = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<div>
			<div className="menu-icon" onClick={handleClick}>
				<FontAwesomeIcon icon={click ? faTimes : faBars} />
			</div>
			<ul className="navlinks">
				<li className="link">
					<Link to="/" className="navlinks__item">
						Inicio
					</Link>
				</li>
				<li className="link">
					<Link to="/trucks" className="navlinks__item">
						Nuestros Camiones
					</Link>
				</li>
				<li className="link">
					<Link to="/about-section" className="navlinks__item">
						Sobre Nosotros
					</Link>
				</li>
				<li className="link">
					<Link to="/contact" className="navlinks__item">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;

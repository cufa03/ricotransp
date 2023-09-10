import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
import './styles.css';
const NavLinks = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <div>
      {/* <div className='menu-icon' onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </div> */}
      <ul className='navlinks'>
        <li className='link'>
          <NavLink to='/' className='navlinks__item'>
            Inicio
          </NavLink>
        </li>
        <li className='link'>
          <NavLink to='/trucks' className='navlinks__item'>
            Nuestros Camiones
          </NavLink>
        </li>
        <li className='link'>
          <NavLink to='/about-section' className='navlinks__item'>
            Sobre Nosotros
          </NavLink>
        </li>
        <li className='link'>
          <NavLink to='/contact' className='navlinks__item'>
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;

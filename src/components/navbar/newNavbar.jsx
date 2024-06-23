import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo/Logo';
import { IoMenuSharp, IoCloseOutline } from 'react-icons/io5';

// import NavLinks from './navMenu';

import './newNavbarstyles.css';
const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav>
        <div className='navbar-inner-container'>
          {/* <div className='logo-container'> */}
          <Link className='logo-container' to='/'>
            {/* <Logo /> */}
            <p>T R A N S P O R T E</p>
            <p>R I C O - H N O S</p>
          </Link>
          {/* </div> */}
          <div className='nav__menu' onClick={toggleMenu}>
            {menuOpen ? (
              <IoCloseOutline className='nav__menu__icon close__icon' />
            ) : (
              <IoMenuSharp className='nav__menu__icon ' />
            )}
          </div>
          <div className={`links-container ${menuOpen ? 'open ' : ''}`}>
            <ul>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/trucks'>Nuestros Camiones</NavLink>
              </li>
              <li>
                <NavLink to='/about-section'>Sobre Nosotros</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contacto</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;

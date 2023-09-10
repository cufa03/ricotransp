import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo/Logo';

// import NavLinks from './navMenu';

import './styles.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className='navbar-container'>
        <Link to='/'>
          <Logo />
        </Link>

        <div className='menu' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <NavLinks /> */}

        <ul className={menuOpen ? 'open navlinks' : 'navlinks'}>
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
      </nav>
    </>
  );
};

export default Navbar;

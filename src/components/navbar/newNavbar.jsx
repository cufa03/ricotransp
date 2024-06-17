import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo/Logo';

// import NavLinks from './navMenu';

import './newNavbarstyles.css';
const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
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
          <div className='links-container'>
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

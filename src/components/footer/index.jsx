import React from 'react';
import './footer.css';
import { BsHouse } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__top'>
        <div className='sucursal'>
          <BsHouse className='sucursal__icon' />
          <p className='sucursal__text'>SUCURSAL</p>
        </div>
        <div className='sucursal__info__container'>
          <div className='sucursal__info'>
            <div className='sucursal__nombre'>
              <p>Avellaneda</p>
            </div>
            <div className='sucursal__info__description'>
              <p>
                <BiMap /> Dirección: Entre Ríos 1839.
              </p>
              <p>
                <BsTelephone /> Telefono: (11) 5329-6741 / (11) 5615-4005
              </p>
              <p>
                <AiOutlineMail /> Email: info@transportericohnos.com
              </p>
            </div>
          </div>
          <div className='time-info'>
            <p>Horarios</p>
            <p>Lunes a viernes de</p>
            <p>9 hs. - 18 hs.</p>
          </div>
        </div>
      </div>
      <div className='bottom--line' />
      <div className='footer__bottom'>
        {/* &copy; Copyright Rico Hnos Transporte - Todos los derechos reservados{' '} */}
        Rico Hnos Transporte
      </div>
    </div>
  );
};

export default Footer;

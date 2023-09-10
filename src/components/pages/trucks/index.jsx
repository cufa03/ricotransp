import React from 'react';
import camion1 from '../../../assets/nuestros-camiones-1.jpg';
import camion2 from '../../../assets/nuestros-camiones-2.jpg';
import camion3 from '../../../assets/nuestros-camiones-3.jpg';
import camion4 from '../../../assets/nuestros-camiones-4.jpg';
import camion5 from '../../../assets/nuestros-camiones-5.jpg';
import camion6 from '../../../assets/nuestros-camiones-6.jpg';
import './styles.css';
const ourTrucks = () => {
  return (
    <>
      {/* <div className="titulo"></div> */}
      <div className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          <img
            src={camion1}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
        <figure className='gallery__item gallery__item--2'>
          <img
            src={camion6}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
        <figure className='gallery__item gallery__item--3'>
          <img
            src={camion3}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
        <figure className='gallery__item gallery__item--4'>
          <img
            src={camion4}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
        <figure className='gallery__item gallery__item--5'>
          <img
            src={camion5}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
        <figure className='gallery__item gallery__item--6'>
          <img
            src={camion2}
            className='gallery__img'
            alt='imagen de un camion'
          />
        </figure>
      </div>
    </>
  );
};

export default ourTrucks;

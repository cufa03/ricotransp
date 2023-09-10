import React from 'react';
import img3 from '../../../assets/nuestros-camiones-3.jpg';
import img4 from '../../../assets/nuestros-camiones-4.jpg';
import img6 from '../../../assets/nuestros-camiones-6.jpg';
import './home.css';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='container-1'>
        <div className='container-1-text'>
          <p>TRANSPORTE RICO HNOS</p>
          <p>
            Contamos con sede en Buenos Aires, cuenta con una flota moderna de 6
            camiones, especializados en el transporte de todo tipo de cargas,
            incluyendo las químicas y peligrosas. Nuestra experiencia y
            compromiso garantizan la seguridad y puntualidad en cada entrega.
            ¿Tiene un envío especial o necesita una cotización? No dude en
            consultarnos, estamos aquí para servirle.
          </p>
        </div>
        <div className='container-1-img'>
          <img src={img6} alt='' />
        </div>
      </div>

      <div className='container-2'>
        <div className='container-2-text'>
          <p>"Tu carga, nuestro compromiso: Transporte Rico Hnos."</p>
        </div>
        <div className='bg-dark'></div>
        <div className='container-2-img'>
          <img src={img4} alt='' />
        </div>
      </div>
      <div className='container-3'>
        <div className='container-3-text'>
          <h3>¡QUEREMOS SABER DE USTED!</h3>
          <p>Entre Rios 1938</p>
          <p>(11) 5329-6741 / (11) 5615-4005</p>
          <p>info@transportericohnos.com</p>
        </div>
        <div>
          <img src={img3} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;

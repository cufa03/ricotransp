import React from 'react';
import image from '../../../assets/truck.png';
import './styles.css';

const AboutSection = () => {
	return (
		<div className="about__container img__background">
			<div className="img__container">
				<div className="about_img__container1">
					<img alt="Ford working truck" src={image} />
				</div>
				<div className="about_img__container2">
					<img alt="Ford working truck" src={image} />
				</div>
			</div>

			<div className="about__description">
				<h2>NUESTRA EMPRESA</h2>
				<p className="title">POLÍTICA DE CALIDAD</p>
				<p className="title">VISIÓN</p>
				<p className="text__description">
					Consolidarnos como la empresa líder en servicios de logística y
					transporte de la región.
				</p>
				<p className="title">MISIÓN</p>
				<p className="text__description">
					Brindar soluciones de transporte a nuestros clientes de Corrientes,
					Chaco, Formosa, Buenos Aires, Córdoba y Rosario; a través de una
					amplia gama de servicios innovadores y de calidad; basados en la
					constante inversión en nuestros recursos humanos, en la tecnología y
					en la flota.
				</p>
				<p className="title">VALORES</p>
				<p className="text__description">
					En{' '}
					<a href="#" data-tool-tip=" Lideres en el mercado ">
						Transporte Rico Hnos
					</a>{' '}
					compartimos los siguientes valores que nos guían diariamente hacia la
					total satisfacción de nuestros clientes y que constituyen nuestra
					carta de navegación. Estos son algunos de los valores que constituyen
					nuestra carte de navegación:
				</p>
				<p className="text__description">
					* Enfoque al cliente
					<br />
					* Pasión por nuestro trabajo
					<br />
					* Compromiso con la calidad del servicio y con el desarrollo del
					capital humano
					<br />* Innovación permanente
				</p>
				<p className="text__description">
					Para orientarnos a cumplir nuestra visión, sustentar la misión y
					afianzar nuestros valores, hemos formulado un compromiso con la
					calidad que se cristaliza mediante la implementación, mantenimiento y
					mejora continua de un Sistema de Gestión de la Calidad acorde a los
					requerimientos de la Norma ISO 9001, versión vigente.
				</p>
			</div>
			<div className="about_img__container3">
				<img alt="Ford working truck" src={image} />
			</div>
		</div>
	);
};

export default AboutSection;

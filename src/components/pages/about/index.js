import React from 'react';
import image from '../../../assets/truck.png';
import './styles.css';

const AboutSection = () => {
	return (
		<div className="about__container">
			<div className="about_img">
				<img alt="Ford working truck" src={image} />
			</div>
			<div className="about__description">
				<h2>NUESTRA EMPRESA</h2>
				<p className="title">POLÍTICA DE CALIDAD</p>
				<p className="title">VISIÓN</p>
				<p>
					Consolidarnos como la empresa líder en servicios de logística y
					transporte de la región del Nordeste Argentino.
				</p>
				<p className="title">MISIÓN</p>
				<p>
					Brindar soluciones de transporte a nuestros clientes de Corrientes,
					Chaco, Formosa, Buenos Aires, Córdoba y Rosario; a través de una
					amplia gama de servicios innovadores y de calidad; basados en la
					constante inversión en nuestros recursos humanos, en la tecnología y
					en la flota.
				</p>
				<p className="title">VALORES</p>
				<p>
					En{' '}
					<a href="#" data-tool-tip=" Lideres en el mercado ">
						Transporte Rico Hnos
					</a>{' '}
					compartimos los siguientes valores que nos guían diariamente hacia la
					total satisfacción de nuestros clientes y que constituyen nuestra
					carta de navegación. Estos son algunos de los valores que constituyen
					nuestra carte de navegación:
				</p>
				<p>
					* Enfoque al cliente
					<br />
					* Pasión por nuestro trabajo
					<br />
					* Compromiso con la calidad del servicio y con el desarrollo del
					capital humano
					<br />* Innovación permanente
				</p>
				<p>
					Para orientarnos a cumplir nuestra visión, sustentar la misión y
					afianzar nuestros valores, hemos formulado un compromiso con la
					calidad que se cristaliza mediante la implementación, mantenimiento y
					mejora continua de un Sistema de Gestión de la Calidad acorde a los
					requerimientos de la Norma ISO 9001, versión vigente.
				</p>
				<p>
					Definimos, implementamos y monitoreamos la evolución de los siguientes
					objetivos:
				</p>
				<p>
					* Satisfacer las necesidades de nuestros clientes y nuestros
					requisitos comprometidos manteniendo y mejorando nuestros estándares
					de servicio.
					<br />
					* Lograr un crecimiento sostenible de nuestra empresa y eficiencia en
					el uso de los recursos humanos, tecnológicos y de infraestructura
					disponibles.
					<br />
					* Propiciar el compromiso y la participación de los empleados
					favoreciendo su crecimiento personal y profesional.
					<br />
					* Cumplir todos los requisitos legales aplicables a nuestra actividad.
					<br />
					* Cuidar el medio ambiente y emprender acciones solidarias hacia la
					sociedad.
					<br />* Promover la integración de los proveedores que nos acompañan
					en la prestación de nuestros servicios. Todos los empleados y
					directivos de Expreso Demonte estamos involucrados con la Política de
					Calidad de nuestra organización manteniendo una actitud proactiva y
					comprometida con ella.
				</p>
			</div>
		</div>
	);
};

export default AboutSection;

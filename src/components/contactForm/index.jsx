import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css';
const ContactForm = () => {
	// const [data, setData] = useState({ name: '', email: '', phone: '', msg: '' });
	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	setData({ ...data, [name]: value });
	// };
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	setData({ name: '', email: '', phone: '', msg: '' });
	// };
	const formi = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_0xhs34c',
				'template_8gss1dm',
				formi.current,
				'4q7xBqPHPqH0AlCG0'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		// <div>
		// 	<form method="post" onSubmit={handleSubmit}>
		// 		<p>
		// 			Comunicate con <span>Nosotros</span>
		// 		</p>
		// 		<input
		// 			type="text"
		// 			name="name"
		// 			id=""
		// 			onChange={handleChange}
		// 			value={data.name}
		// 			placeholder="Ingrese su nombre"
		// 		/>
		// 		<input
		// 			type="email"
		// 			name="email"
		// 			id=""
		// 			onChange={handleChange}
		// 			value={data.email}
		// 			placeholder="ejemplo@gmail.com"
		// 		/>
		// 		<input
		// 			type="phone"
		// 			name="phone"
		// 			id=""
		// 			onChange={handleChange}
		// 			value={data.phone}
		// 			placeholder="+54 11 12345678"
		// 		/>
		// 		<textarea
		// 			name="msg"
		// 			id=""
		// 			cols="30"
		// 			rows="10"
		// 			onChange={handleChange}
		// 			value={data.msg}
		// 			placeholder="Escriba su consulta aquí..."
		// 		/>
		// 		<button type="submit"> Enviar </button>
		// 	</form>
		// </div>
		<form ref={formi} onSubmit={sendEmail}>
			{/* <label>Name</label> */}
			<p>
				Comunicate con <span>Nosotros</span>
			</p>
			<input type="text" name="user_name" placeholder="Ingrese su nombre" />
			{/* <label>Email</label> */}
			<input type="email" name="user_email" placeholder="ejemplo@gmail.com" />
			<input type="phone" name="user_phone" placeholder="+54 11 12345678" />
			{/* <label>Message</label> */}
			<textarea
				name="message"
				id=""
				cols="30"
				rows="1"
				placeholder="Escriba su consulta aquí..."
			/>
			{/* <input type="submit" value="Send" /> */}
			<button type="submit" value="Send">
				Enviar
			</button>
		</form>
	);
};

export default ContactForm;

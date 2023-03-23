import React from 'react';
import { useState } from 'react';
import './styles.css';
const ContactForm = () => {
	const [data, setData] = useState({ name: '', email: '', phone: '', msg: '' });
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData({ ...data, [name]: value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setData({ name: '', email: '', phone: '', msg: '' });
	};
	return (
		<div>
			<form method="post" onSubmit={handleSubmit}>
				<p>
					Comunicate con <span>Nosotros</span>
				</p>
				<input
					type="text"
					name="name"
					id=""
					onChange={handleChange}
					value={data.name}
					placeholder="Ingrese su nombre"
				/>
				<input
					type="email"
					name="email"
					id=""
					onChange={handleChange}
					value={data.email}
					placeholder="ejemplo@gmail.com"
				/>
				<input
					type="phone"
					name="phone"
					id=""
					onChange={handleChange}
					value={data.phone}
					placeholder="+54 11 12345678"
				/>
				<textarea
					name="msg"
					id=""
					cols="30"
					rows="10"
					onChange={handleChange}
					value={data.msg}
					placeholder="Escriba su consulta aquí..."
				/>
				<button type="submit"> Enviar </button>
			</form>
		</div>
	);
};

export default ContactForm;

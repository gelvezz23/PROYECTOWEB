/** @format */

import React, { useState } from 'react';
import NavBar from './../components/Navbar';

const Registro = (props) => {
	const [formulario, setFormulario] = useState({
		name: '',
		QuienesSomos: '',
		email: '',
		direccion: '',
		telefono: '',
		facebook: '',
		twitter: '',
		instagram: '',
	});

	const handleInput = (event) => {
		setFormulario({
			...formulario,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = 'http://localhost:4000/empresa';
		const data = formulario;

		console.log(data);

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.status == 200) {
					props.history.push('/Login');
				}
			})
			.catch((error) => console.error('Error:', error));
	};

	return (
		<>
			<NavBar />
			<section className='uk-container'>
				<form id='formulario-registro' onSubmit={handleSubmit}>
					<div className='uk-card uk-width-1-2@m uk-border-rounded uk-align-center'>
						<div className='uk-card-header'>
							<div className='uk-grid-small uk-flex-middle' uk-grid='true'>
								<div className='uk-width-expand'>
									<h2 className=''>Bienvenido a Working</h2>
								</div>
							</div>
						</div>
						<div className='uk-card-body'>
							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: user;ratio: 1;'></span>
									<input
										name='name'
										className='uk-input uk-form-large border-round '
										type='text'
										placeholder='Nombre'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: user;ratio: 1;'></span>
									<input
										name='QuienesSomos'
										className='uk-input uk-form-large border-round '
										type='text'
										placeholder='Apellido'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: mail;ratio: 1;'></span>
									<input
										name='email'
										className='uk-input uk-form-large border-round '
										type='email'
										placeholder='Email de contacto'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: home;ratio: 1;'></span>
									<input
										name='direccion'
										className='uk-input uk-form-large border-round '
										type='text'
										placeholder='Direccion'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span
										className='uk-form-icon'
										uk-icon='icon: receiver;ratio: 1;'
									></span>
									<input
										name='telefono'
										className='uk-input uk-form-large border-round'
										type='number'
										placeholder='Telefono de contacto'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span
										className='uk-form-icon'
										uk-icon='icon: facebook;ratio: 1;'
									></span>
									<input
										name='facebook'
										className='uk-input uk-form-large border-round'
										type='text'
										placeholder='Facebook'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: twitter;ratio: 1;'></span>
									<input
										name='twitter'
										className='uk-input uk-form-large border-round'
										type='text'
										placeholder='Twitter'
										onChange={handleInput}
										required
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span
										className='uk-form-icon'
										uk-icon='icon: instagram;ratio: 1;'
									></span>
									<input
										name='instagram'
										className='uk-input uk-form-large border-round'
										type='text'
										placeholder='Instagram'
										onChange={handleInput}
										required
									/>
								</div>
							</div>
						</div>

						<div className='uk-card-footer'>
							<button className='uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom'>
								<span uk-icon='icon: chevron-double-right; ratio: 2'></span>
								Registrate
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default Registro;

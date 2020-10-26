/** @format */

import React, { useState } from 'react';
import NavBar from './../components/Navbar';
import { Link } from 'react-router-dom';
import './../assets/css/Login.css';

const Login = (props) => {
	const [formulario, setFormulario] = useState({
		name: '',
		email: '',
	});

	const handleInput = (event) => {
		setFormulario({
			...formulario,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = `http://localhost:4000/login/${formulario.email}/${formulario.name}`;

		fetch(url)
			.then((res) => res.json())
			.then((response) => {
				if (response.status == 200) {
					console.log(response);
					sessionStorage.setItem('user', JSON.stringify(response.user));
					props.history.push('/dashboard');
				}
			})
			.catch((error) => console.error('Error:', error));
	};

	return (
		<>
			<NavBar />
			<section className='uk-container '>
				<div className='uk-card uk-width-1-2@m uk-border-rounded uk-align-center'>
					<div className='uk-card-header'>
						<div className='uk-grid-small uk-flex-middle' uk-grid='true'>
							<div className='uk-width-expand'>
								<h2 className=''>Bienvenido a Working</h2>
							</div>
						</div>
					</div>
					<form id='formulario-registro' onSubmit={handleSubmit}>
						<div className='uk-card-body'>
							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: user;ratio: 2;'></span>
									<input
										onChange={handleInput}
										name='name'
										className='uk-input uk-form-large border-round '
										type='text'
										placeholder='Nombre de usuario'
									/>
								</div>
							</div>

							<div className='uk-margin uk-width-1-1'>
								<div className='uk-inline uk-width-1-1'>
									<span className='uk-form-icon' uk-icon='icon: lock;ratio: 2;'></span>
									<input
										onChange={handleInput}
										name='email'
										className='uk-input uk-form-large border-round'
										type='text'
										placeholder='Email'
									/>
								</div>
							</div>

							<div className='uk-card-footer'>
								<button className='uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom'>
									<span uk-icon='icon: chevron-double-right; ratio: 2'></span>
									Iniciar sesion con nosotros
								</button>
							</div>
						</div>
					</form>

					<div className='uk-card-footer'>
						<Link
							to='#'
							className='uk-button btn-clic2work-blue uk-light uk-width-1-1 uk-margin-small-bottom'
						>
							<span uk-icon='icon: facebook; ratio: 2'></span>
							Iniciar sesion con facebook
						</Link>

						<Link
							to='#'
							className='uk-button btn-clic2work-red uk-light uk-width-1-1 uk-margin-small-bottom'
						>
							<span uk-icon='icon: google; ratio: 2'></span>
							Iniciar sesion con Google
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;

/** @format */

import React, { useState, useEffect } from 'react';

const AddCategory = () => {
	const [inputValue, setinputValue] = useState({
		estado: '',
		categoria: '',
	});

	const { estado, categoria } = inputValue;

	const handleInputValue = ({ target }) => {
		setinputValue({ ...inputValue, [target.name]: target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = `http://localhost:4000/categoria`;
		const data = inputValue;
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
				}
			})
			.catch((error) => console.error('Error:', error));
	};

	return (
		<>
			<section className='uk-container '>
				<div className='uk-card uk-width-1-2@m uk-border-rounded uk-align-center'>
					<div className='uk-card-header'>
						<div className='uk-grid-small uk-flex-middle' uk-grid='true'>
							<div className='uk-width-expand'>
								<h2 className=''>Agregar categoria</h2>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='categoria'
							value={categoria}
							onChange={handleInputValue}
							className='uk-input uk-form-large border-round'
							placeholder='categoria'
						/>
						<select
							name='estado'
							id='estado'
							value={estado}
							className='uk-input uk-form-large border-round'
							onChange={handleInputValue}
						>
							<option value=''> - Seleccione estado -</option>
							<option value='1'>activo</option>
							<option value='0'>inactivo</option>
						</select>
						<div className='uk-card-footer'>
							<button
								type='submit'
								className='uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom'
							>
								<span uk-icon='icon: chevron-double-right; ratio: 2'></span>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
export default AddCategory;

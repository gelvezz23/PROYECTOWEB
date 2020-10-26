/** @format */

import React, { useState, useEffect } from 'react';

const AddProductos = () => {
	const [categorys, setcategorys] = useState([]);

	const [inputValue, setinputValue] = useState({
		referencia: '',
		nombre: '',
		descripcion: '',
		detalle: '',
		valor: '',
		categorias: '',
		estado: '',
		imagen: '',
	});

	const { referencia, nombre, descripcion, detalle, valor, imagen } = inputValue;

	const handleInputValue = ({ target }) => {
		setinputValue({ ...inputValue, [target.name]: target.value });
	};

	useEffect(() => {
		const url_category = 'http://localhost:4000/categoria';
		fetch(url_category)
			.then((res) => res.json())
			.then((response) => setcategorys(response));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = `http://localhost:4000/producto`;
		const data = inputValue;
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
				if (response.status === 200) {
					console.log(response);
					setinputValue({
						referencia: '',
						nombre: '',
						descripcion: '',
						detalle: '',
						valor: '',
						categorias: '',
						estado: '',
						imagen: '',
					});
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
								<h2 className=''>Agregar producto</h2>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='referencia'
							value={referencia}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='referencia'
						/>
						<input
							type='text'
							name='nombre'
							value={nombre}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='nombre'
						/>
						<input
							type='text'
							name='descripcion'
							value={descripcion}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='descripcion'
						/>
						<input
							type='text'
							name='detalle'
							value={detalle}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='detalle'
						/>
						<input
							type='number'
							name='valor'
							value={valor}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='valor'
						/>
						<select
							name='estado'
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
						>
							<option value=''>- seleccione estado -</option>
							<option value='1'>activo</option>
							<option value='0'>inactivo</option>
						</select>

						<select
							name='categorias'
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
						>
							<option value=''> - Seleccione categoria -</option>
							{categorys.map((cat, index) => {
								return (
									cat.estado === '1' && (
										<option key={index} value={cat.id}>
											{cat.descripcion}
										</option>
									)
								);
							})}
						</select>

						<input
							type='text'
							name='imagen'
							value={imagen}
							onChange={handleInputValue}
							className='uk-input uk-margin uk-form-large border-round'
							placeholder='URL Imagen'
						/>

						<div className='uk-card-footer'>
							<button className='uk-button uk-margin btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom'>
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
export default AddProductos;

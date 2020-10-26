/** @format */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProduct } from './../redux/actions';
import { Link } from 'react-router-dom';
import './../assets/css/Search.css';

const Search = (props) => {
	const [value, setValue] = useState('');
	const { getProduct, searching } = props;

	const handleChange = (event) => {
		let { value } = event.target;
		if (value) {
			getProduct(value);
			setValue(value);
		} else {
			getProduct('');
		}
	};

	return (
		<div className=''>
			<div className='uk-inline'>
				<Link
					className='uk-form-icon uk-form-icon-flip btn-clic2work-search uk-light'
					to={'/Categories/pantalon' + value}
					uk-icon='icon: search'
				></Link>
				<input
					id='search-input'
					name='inputSearch'
					className='uk-input input-form uk-form-width-large'
					type='text'
					placeholder='Escribe aqui el producto o servicio que deseas!'
					onChange={handleChange}
				/>
				<div uk-dropdown='mode: click; pos: bottom-justify'>
					<ul className='uk-nav uk-dropdown-nav'>
						<li className='uk-active '>
							<Link to='/'>Buscando ...</Link>
						</li>

						{searching.length > 0 &&
							searching.map((item) => {
								return (
									<li key={item.id} className='uk-active '>
										<Link to={'/Categories/' + item.nombre}> {item.nombre}</Link>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	getProduct,
};

const mapStateToProps = (state) => {
	return {
		searching: state.searching,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

/** @format */

import React, { useEffect } from 'react';
import Navbar from './../components/Navbar';
import { connect } from 'react-redux';
import { getOnlyProduct, setProducts } from './../redux/actions';
import Products from './../components/Products';
import Search from './../components/Search';

const Categories = (props) => {
	const { setProducts, searching, products } = props;

	useEffect(() => {
		const { id } = props.match.params;
		const url = 'http://localhost:4000/producto';
		fetch(url)
			.then((res) => res.json())
			.then((response) => setProducts(response));
		if (id) {
			getOnlyProduct(id);
		} else {
			return 'No hay productos';
		}
	});

	return (
		<>
			<Navbar isBlack={true} />

			<div className='item-responsibe'>
				<Search />
			</div>

			<div className='uk-container uk-align-center'>
				<section
					className='uk-child-width-1-3@m uk-grid-small uk-grid-match'
					uk-grid='true'
				>
					{searching.length === 0 && <h3>No hay productos.</h3>}
					{searching.length > 0 &&
						searching.map((item) => {
							return (
								<Products
									key={item.id}
									id={item.id}
									title={item.nombre}
									precio={item.valor}
									cantidad={item.cantidad}
									cover={item.img}
									description={item.descripcioncorta}
								/>
							);
						})}

					{products.length > 0 &&
						products.map((item) => {
							return (
								<Products
									key={item.id}
									id={item.id}
									title={item.nombre}
									precio={item.valor}
									cantidad={item.cantidad}
									cover={item.img}
									description={item.descripcioncorta}
								/>
							);
						})}
				</section>
			</div>
		</>
	);
};

const mapDispatchToProps = {
	getOnlyProduct,
	setProducts,
};

const mapStateToProps = (state) => {
	return {
		searching: state.searching,
		products: state.products,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

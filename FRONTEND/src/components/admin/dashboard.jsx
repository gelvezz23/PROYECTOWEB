/** @format */

import React from 'react';
import Navbar from '../Navbar';
import AddCategory from './addCategory';
import AddProduct from './addProducto';

function Dashboard() {
	return (
		<>
			<Navbar />

			<section>
				<AddCategory />
				<AddProduct />
			</section>
		</>
	);
}

export default Dashboard;

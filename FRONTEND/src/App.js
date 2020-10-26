/** @format */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './container/Login';
import Store from './redux/store';
import Home from './container/Home';
import Categories from './container/Categories';
import Registro from './container/Registro';
import Dashboard from './components/admin/dashboard';
import Cart from './container/Cart';
import Layout from './components/Layout';
import './App.css';

const App = () => (
	<Provider store={Store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/Cart' component={Cart} />
					<Route exact path='/Login' component={Login} />
					<Route exact path='/Registro' component={Registro} />
					<Route exact path='/Categories/:id' component={Categories} />
					<Route exact path='/dashboard' component={Dashboard} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</Provider>
);

export default App;

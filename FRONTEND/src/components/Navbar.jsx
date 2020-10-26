/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/image/logo_FCE.jpg';
import LogoWhite from './../assets/image/logo_FCE.png';
import './../assets/css/Navbar.css';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Search from './../components/Search';
import Factura from './../components/Factura';

const Navbar = (props) => {
	const { isBlack, user, mylist } = props;
	var navBarStyle = classNames({ '': true });
	var textStyle = classNames({ '': true });

	if (isBlack) {
		navBarStyle = classNames({ 'uk-background-secondary': true });
		textStyle = classNames({ 'btn-clic2work uk-light': true });
	}

	return (
		<nav className={`uk-navbar-transparent ${navBarStyle}`} uk-navbar='true'>
			<div className='uk-navbar-left'>
				<ul className='uk-navbar-nav uk-margin-left '>
					<li>
						<Link to='/'>
							<img
								className='uk-margin-small'
								src={isBlack ? LogoWhite : Logo}
								width='170px'
								alt=''
							/>
						</Link>
					</li>
				</ul>
			</div>
			{isBlack && (
				<div className='uk-navbar-center uk-width-1-1'>
					<ul className='uk-navbar-nav uk-width-1-1'>
						<div className='uk-navbar-item uk-width-1-1 item-navbar'>
							<Search />
						</div>
					</ul>
				</div>
			)}
			<div className='uk-navbar-right'>
				<ul className='uk-navbar-nav'>
					<div className='uk-navbar-item'>
						<p uk-icon='icon : cart; ratio: 1.8'>
							<span className='uk-badge clic2work-color'>{mylist.length}</span>
						</p>
						<div className='uk-margin-top' uk-dropdown='pos: bottom-right;'>
							<Factura />
						</div>
					</div>
					<div className='uk-navbar-item item-navbar'>
						<Link to='/Login' className={`uk-button uk-text-capitalize ${textStyle}`}>
							Entrar
						</Link>
					</div>

					<div className='uk-navbar-item item-navbar'>
						<Link
							to='/Registro'
							className='uk-button btn-clic2work uk-light uk-text-capitalize'
						>
							Registrate
						</Link>
					</div>
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
		mylist: state.mylist,
	};
};

export default connect(mapStateToProps, null)(Navbar);

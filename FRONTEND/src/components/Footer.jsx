/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='uk-grid-collapse uk-child-width-expand@s uk-text-left' uk-grid='true'>
			<div>
				<div className='uk-padding'>
					<div className='uk-width-1-2@s uk-width-2-5@m'>
						<ul className='uk-nav uk-nav-default'>
							<li className='uk-nav-header'>Menu</li>
							<li>
								<Link to='/'>Contacto</Link>
							</li>
							<li>
								<Link to='/Categories/pantalon negro'>Precio</Link>
							</li>
							<li>
								<Link to='/'>Sobre nosotros</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='uk-padding'>
				<div className='uk-width-1-2@s uk-width-2-5@m'>
					<ul className='uk-nav uk-nav-default'>
						<li className='uk-nav-header'>Redes sociales</li>
						<li>
							<Link to='/'>
								<span uk-icon='icon: facebook'></span> Facebook
							</Link>
						</li>
						<li>
							<Link to='/'>
								<span uk-icon='icon: instagram'></span> Instagram
							</Link>
						</li>
						<li>
							<Link to='/'>
								<span uk-icon='icon: twitter'></span>Twitter
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;

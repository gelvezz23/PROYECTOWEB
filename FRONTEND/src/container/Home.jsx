/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/Home.css';
import Navbar from './../components/Navbar';
import ImgStatic from './../assets/image/img33.gif';
import ImgCard from './../assets/image/card1.jpg';
import ImgCardDos from './../assets/image/card2.jpg';
import ImgCardTres from './../assets/image/card3.jpg';
import Search from './../components/Search';
import { connect } from 'react-redux';
import { setProducts } from './../redux/actions';
import { useEffect } from 'react';

const Home = (props) => {
	const { setProducts } = props;
	useEffect(() => {
		const url = 'http://localhost:4000/producto';
		fetch(url)
			.then((res) => res.json())
			.then((response) => setProducts(response));
	}, []);

	return (
		<>
			<Navbar />

			<section className='header-home'>
				<div className='uk-child-width-expand@s' uk-grid='true'>
					<div className='uk-margin-xlarge-top  uk-container'>
						<br />
						<h3 className='uk-text-bolder'>
							El estilo y la calidad a tan solo
							<br />
							un click ¿ que estas esperando ?
						</h3>
						<div className='uk-margin uk-container'>
							<Search key='search' />
							<nav
								className='uk-navbar-container uk-navbar-transparent uk-margin-xlarge-top uk-margin-left'
								uk-navbar='true'
							>
								<div className='uk-navbar-bottom'>
									<ul className='uk-navbar-nav'>
										<li className='uk-active'>
											<div className='uk-navbar-item'>
												<Link className='uk-link-reset' to='/'>
													Contacto
												</Link>
											</div>
										</li>

										<li className='uk-active'>
											<div className='uk-navbar-item'>
												<Link className='uk-link-reset' to='/Categories/pantalon negro'>
													Precios
												</Link>
											</div>
										</li>
										<li className='uk-active'>
											<div className='uk-navbar-item'>
												<Link className='uk-link-reset' to='/'>
													Sobre Nosotros
												</Link>
											</div>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>

					<div className='uk-align-center uk-grid-item-match'>
						<div className='uk-card uk-card-body uk-width-xlarge'>
							<iframe
								width='500'
								height='600'
								src='https://www.instagram.com/fcexclusive/'
								frameBorder='0'
							></iframe>
							{/* <img
								src={ImgStatic}
								sizes='(min-width: 650px) 650px'
								alt=''
								uk-img='true'
							/> */}
						</div>
					</div>
				</div>
			</section>
			<section className='uk-container'>
				<div
					className='uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin'
					uk-grid='true'
				>
					<div className='uk-card-media-left uk-cover-container'>
						<img
							src='https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/94203355_269141940766949_4652043487188727145_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=rytFB5cYNd8AX8mN0w7&_nc_tp=24&oh=d72fe0b1ebef36be76fd32698121d7b4&oe=5FC07A93'
							alt=''
							uk-cover='true'
							uk-img='true'
						/>
						<canvas width='500' height='300'></canvas>
					</div>
					<div>
						<div className='uk-card-body uk-position-large'>
							<h1 className='uk-card-title'>
								<strong>
									Contamos con diferentes diseños <br />
									la mejor kalidad y precio
								</strong>
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas a, quos
								velit facilis dolores, minima unde error consectetur hic veritatis commodi
								nemo possimus tempora inventore. Accusantium harum ipsam quas incidunt?{' '}
							</p>
						</div>
					</div>
				</div>

				<div
					className='uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin'
					uk-grid='true'
				>
					<div className='uk-card-media-left uk-cover-container'>
						<img
							src='https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/93961333_245694093157203_4435444260754203015_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=e9pRDQ_2EewAX-F1rpq&oh=ec9d755305f319b4f11501fa212e0f42&oe=5FBFBBFB'
							alt=''
							uk-cover='true'
							uk-img='true'
						/>
						<canvas width='500' height='300'></canvas>
					</div>
					<div>
						<div className='uk-card-body uk-position-large'>
							<h3 className='uk-card-title'>Calidad garantizada</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos odit,
								obcaecati ipsa suscipit optio corrupti porro numquam expedita, odio quis
								culpa ullam doloremque perspiciatis minima ipsum? Ullam quibusdam sed
								fuga?
							</p>
						</div>
					</div>
				</div>

				<div
					className='uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin'
					uk-grid='true'
				>
					<div className='uk-card-media-left uk-cover-container'>
						<img
							src='https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/19533674_147710315788320_8721418414402306048_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=DVzQBQCpAHgAX_YZL0r&_nc_tp=18&oh=749fc15d826b022a10a1b1852eaec898&oe=5FBEB466'
							alt=''
							uk-cover='true'
							uk-img='true'
						/>
						<canvas width='500' height='300'></canvas>
					</div>
					<div>
						<div className='uk-card-body uk-position-large'>
							<h3 className='uk-card-title'>Fácil y seguro</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt
								voluptate, distinctio nemo velit perspiciatis nobis accusamus
								necessitatibus delectus, odit eos corporis minus ipsam libero ducimus
								facilis, aliquam rem assumenda.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='uk-height-large uk-background-cover uk-overflow-hidden uk-dark uk-flex uk-flex-top uk-background-muted'>
					<div className='uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical'>
						<h1
							uk-parallax='opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;'
							className='uk-text-secondary'
						>
							Tienes dudas sobre tus ordenes o cómo comprar ?
						</h1>
						<p
							uk-parallax='opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;'
							className='uk-text-secondary uk-text-bold'
						>
							Llama a la línea para clientes :
							<span className='uk-text-warning'>+57 302 2199037</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

const mapDispatchToProps = {
	setProducts,
};

export default connect(null, mapDispatchToProps)(Home);

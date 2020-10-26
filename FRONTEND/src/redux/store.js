/** @format */

import { createStore, compose } from 'redux';
import reducer from './reducers';
const composeEnhancers =
	(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ||
	compose;

const initialState = {
	user: {},
	playing: {},
	searching: {},
	mylist: [],
	products: [
		{
			id: 1,
			title: 'tubo pvc',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 2,
			title: 'tubo pvc rectangular',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 3,
			title: 'tubo plex',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 4,
			title: 'tubo pvc polipropeno',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 5,
			title: 'tubo pvc polipropeno',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 6,
			title: 'tubo pvc polipropeno',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 7,
			title: 'tubo pvc polipropeno de 1 metro con 4 cm de diametro',
			precio: 1200,
			cantidad: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
	],
	employee: [
		{
			id: 111,
			name: 'Pablo',
			title: 'arquitecto',
			precio: 1000,
			email: 'pablo@clic2work.com',
			rate: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
		{
			id: 222,
			name: 'carlos',
			title: 'ingeniero de sistemas',
			precio: 1000,
			email: 'carlos@devhome.dev',
			rate: 0,
			cover: 'http://dummyimage.com/600x600.png/99118E/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
		},
	],
};

const store = createStore(reducer, initialState, composeEnhancers);

export default store;

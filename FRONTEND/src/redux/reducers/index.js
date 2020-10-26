/** @format */

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CART':
			return {
				...state,
				mylist: [...state.mylist, action.payload],
			};

		case 'GET_PRODUCT_SEARCH':
			if (action.payload === '') {
				return { ...state, searching: {} };
			} else {
				const listSearch = [...state.products];
				return {
					...state,
					searching: listSearch.filter((items) =>
						items.nombre.toLowerCase().includes(action.payload.toLocaleLowerCase())
					),
				};
			}

		case 'GET_ONLY_PRODUCT':
			if (action.payload === '') {
				return { ...state, searching: {} };
			} else {
				const listSearch = [...state.products];
				return {
					...state,
					searching: listSearch.filter((items) =>
						items.nombre.toLowerCase().includes(action.payload.toLocaleLowerCase())
					),
				};
			}
		case 'DELETE_PRODUCT':
			return {
				...state,
				mylist: state.mylist.filter((items) => items.id !== action.payload),
			};

		case 'UPDATE_INC_AMOUNT':
			return {
				...state,
				mylist: state.mylist.map((item) => {
					return item.id === action.payload.id
						? { ...item, cantidad: action.payload.cantidad }
						: item;
				}),
			};

		case 'SET_PRODUCTS':
			return {
				...state,
				products: [...action.payload],
			};

		default:
			return state;
	}
};

export default reducer;

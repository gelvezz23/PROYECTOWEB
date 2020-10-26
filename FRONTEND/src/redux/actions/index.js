/** @format */

export const getProduct = (payload) => ({
	type: 'GET_PRODUCT_SEARCH',
	payload,
});

export const getOnlyProduct = (payload) => ({
	type: 'GET_ONLY_PRODUCT',
	payload,
});

export const addCart = (payload) => ({
	type: 'ADD_CART',
	payload,
});

export const deleteProduct = (payload) => ({
	type: 'DELETE_PRODUCT',
	payload,
});
export const updateIncAmount = (payload) => ({
	type: 'UPDATE_INC_AMOUNT',
	payload,
});

export const setProducts = (payload) => ({
	type: 'SET_PRODUCTS',
	payload,
});

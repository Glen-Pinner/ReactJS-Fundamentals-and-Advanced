/**
 * Created by glenp on 23/11/2016.
 */

import {combineReducers} from 'redux';

import activeCategory from './activeCategory';
import products from './products';
import shoppingCart from './shoppingCart';

//
// This code doesn't work
//
// let reducer = combineReducers(activeCategory, products, shoppingCart);
// export default reducer;

export default function reducer(state, action) {
    combineReducers(activeCategory, products, shoppingCart);
}

// export default function reducer(state, action) {
//     return {
//         activeCategory: activeCategory(state, action),
//         products: products(state, action),
//         shoppingCart: shoppingCart(state, action)
//     };
// }

// Test
// let s = reducer(initialState, {type: ADD_TO_CART, payload: {id: 500, name: 'pears', cost: 2, category: 'food'}});
// console.log(s);

// let s = reducer(initialState, {type: ADD_TO_CART, payload: 193});
// s = reducer(s, {type: ADD_TO_CART, payload: 232});
// s = reducer(s, {type: REMOVE_FROM_CART, payload: 232});
// console.log(s);

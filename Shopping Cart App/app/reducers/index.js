/**
 * Created by glenp on 23/11/2016.
 */

import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATEGORY } from '../constants/action-types';

let initialState = {
    activeCategory: 'food',

    products: [
        // In a real app will be populated from an API
        { id: 193, name: 'pizza', cost: 10, category: 'food' },
        { id: 232, name: 'apples', cost: 5, category: 'food' },
        { id: 313, name: 'tv', cost: 1000, category: 'electronics' },
        { id: 424, name: 'phone', cost: 300, category: 'electronics' }
    ],

    shoppingCart: [

    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            // return Object.assign({}, state,)
            // ES7
            return {
                ...state,
                activeCategory: action.payload
            };

        case ADD_TO_CART:
            return {
                ...state,
                // products: [...state.products, action.payload]
                shoppingCart: [...state.shoppingCart, action.payload]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                // products: state.products.filter(product => product.id !== action.payload)
                shoppingCart: state.shoppingCart.filter(productId => productId !== action.payload)
            };

        default:
            return state;
    }
}

// Test
// let s = reducer(initialState, {type: ADD_TO_CART, payload: {id: 500, name: 'pears', cost: 2, category: 'food'}});
// console.log(s);

let s = reducer(initialState, {type: ADD_TO_CART, payload: 193});
s = reducer(s, {type: ADD_TO_CART, payload: 232});
s = reducer(s, {type: REMOVE_FROM_CART, payload: 232});
console.log(s);

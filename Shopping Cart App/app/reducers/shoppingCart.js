/**
 * Created by glenp on 23/11/2016.
 */

import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/action-types';

let initialState = [];

export default function shoppingCart(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            return state.filter(id => id !== action.payload);

        default:
            return state;
    }
}

/**
 * Created by glenp on 25/11/2016.
 */

let initialState = [];

export default function shoppingCart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];

        case 'REMOVE_FROM_CART':
            return state.filter(id => id !== action.payload);

        default:
            return state;
    }
}
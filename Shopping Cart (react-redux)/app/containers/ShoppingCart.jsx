import React from 'react';
import {connect} from 'react-redux';

import ShoppingCart from '../components/ShoppingCart.jsx';

function getProductsInCart(products, shoppingCart) {
    return products.filter(product => shoppingCart.includes(product.id));
}

// state parameter is equivalent to store.getState()
function mapStateToProps(state) {

    // console.log(state);

    return {
        products: getProductsInCart(state.products, state.shoppingCart)
    };
}

// dispatch parameter is equivalent to store.dispatch()
function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {       // Note to self: handleClick is ES6 default prop returning function?
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    id
                }
            })
        }
    };
}

let ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default ShoppingCartContainer;
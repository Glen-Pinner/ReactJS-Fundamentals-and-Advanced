import React from 'react';
import {connect} from 'react-redux';

import Products from '../components/Products.jsx';

// state parameter is equivalent to store.getState()
function mapStateToProps(state) {
    return {
        products: state.products
    };
}

// dispatch parameter is equivalent to store.dispatch()
function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {       // Note to self: handleClick is ES6 default prop returning function?
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id
                }
            })
        }
    };
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;
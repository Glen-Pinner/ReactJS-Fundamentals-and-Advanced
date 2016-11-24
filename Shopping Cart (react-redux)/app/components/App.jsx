import React from 'react'

import Products from '../containers/Products.jsx';
import ShoppingCart from '../containers/ShoppingCart.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to our shop</h1>
                <Products/>
                <ShoppingCart/>
            </div>
        );
    }
}

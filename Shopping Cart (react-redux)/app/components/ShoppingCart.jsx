import React from 'react';
import Product from './Product.jsx';

let ShoppingCart = ({products, handleClick}) => {
    return (
        <section>
            <h2>Shopping Cart</h2>
            <section>
                {products.map(product =>
                    <Product
                        key={product.id}
                        {...product}
                        handleClick={handleClick}
                    />
                )}
            </section>
        </section>
    );
};

export default ShoppingCart;
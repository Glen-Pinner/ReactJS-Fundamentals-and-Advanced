import React from 'react';

let Product = ({id, name, cost, handleClick}) => {
    return (
        <div>
            {name} ${cost} <button onClick={() => handleClick(id)}>Add to cart</button>
        </div>
    );
};

// Add propTypes here

export default Product;
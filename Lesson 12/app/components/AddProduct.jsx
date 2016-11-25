import React from 'react';

let AddProduct = ({handleClick}) => {
    return (
        <div>
            <h2>Add a new product</h2>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProduct;
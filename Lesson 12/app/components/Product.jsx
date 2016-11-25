import React from 'react';

let Product = ({name, cost, description}) => {
    return (
        <section>
            <h2>{name} ${cost}</h2>
            <p>{description}</p>
        </section>
    );
};

export default Product;
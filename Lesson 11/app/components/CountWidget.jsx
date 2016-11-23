import React from 'react';

let CountWidget = ({count, handleOnClick}) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleOnClick}>Increment count</button>
        </div>
    );
};

export default CountWidget;
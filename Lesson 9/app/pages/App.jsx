import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Welcome to the App</p>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

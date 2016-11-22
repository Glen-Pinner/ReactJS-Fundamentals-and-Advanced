import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Our App</h1>
                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                    </nav>
                </header>
                {this.props.children}
                <footer>
                    <p>Our Footer</p>
                </footer>
            </div>
        );
    }
}

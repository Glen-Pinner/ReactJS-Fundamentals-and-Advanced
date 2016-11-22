import React from 'react';
import ReactDOM from 'react-dom';

import constants from './constants/app-constants';
import {incrementActions} from './actions/app-actions';

console.log(constants);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }

    increment(e) {
        incrementActions.incrementCount();
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment count</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
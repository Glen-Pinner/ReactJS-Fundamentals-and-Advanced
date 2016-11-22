import React from 'react';
import ReactDOM from 'react-dom';

import constants from './constants/app-constants';
import {incrementActions} from './actions/app-actions';
import {TodoStore} from './stores/count-store';

console.log(constants);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: TodoStore.getCount()
        };

        this.increment = this.increment.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
        });
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
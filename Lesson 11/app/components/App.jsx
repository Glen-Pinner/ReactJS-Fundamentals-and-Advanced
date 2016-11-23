import React, {Component} from 'react';
import {incrementCount} from '../actions';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        let action = incrementCount();
        console.log(action);
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleOnClick}>Increment count</button>
            </div>
        );
    }
}
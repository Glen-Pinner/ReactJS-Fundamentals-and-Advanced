import React, {Component} from 'react';
import {incrementCount} from '../actions';

import CountWidget from '../components/CountWidget.jsx';

export default class CountWidgetContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.store.getState()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange);
    }

    handleChange() {
        this.setState({
            count: this.props.store.getState()
        })
    }

    handleOnClick(e) {
        this.props.store.dispatch(incrementCount());
    }

    render() {
        return <CountWidget count={this.state.count} handleOnClick={this.handleOnClick} />
    }
}
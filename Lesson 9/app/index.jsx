import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import App from './pages/App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

/*
// Exmample of using children rendering
class Outer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Some information</h3>
                {this.props.children}
                <p>Some more information</p>
            </div>
        );
    }
}

ReactDOM.render((
    <Outer>
        <div>
            <p>Hello</p>
            <p>World</p>
        </div>
    </Outer>
), document.getElementById('app'));
*/

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
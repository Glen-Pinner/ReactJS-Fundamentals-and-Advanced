import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.gotoAbout}>Goto About</button>
                <button onClick={this.props.gotoHome}>Goto Home</button>
            </div>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Welcome to the Home page</p>
            </div>
        );
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>About us</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: <Home/>
        };

        this.gotoAbout = this.gotoAbout.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
    }

    gotoAbout(e) {
        this.setState({
            view: <About/>
        });
    }

    gotoHome(e) {
        this.setState({
            view: <Home/>
        });
    }

    render() {
        return (
            <div>
                <Nav gotoAbout={this.gotoAbout} gotoHome={this.gotoHome} />
                {this.state.view}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
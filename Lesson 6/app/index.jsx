import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    getInitialState: function () {
        return {
            profiles: [
                { name: 'David' },
                { name: 'Sarah' }
            ]
        };
    },

    render: function () {
        return (
            <section>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name: {this.state.profiles[0].name}</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name: {this.state.profiles[1].name}</p>
                </section>
            </section>
        );
    }
});

// Render 'App' variable with embedded HTML
ReactDOM.render(<App />, document.getElementById('app'));
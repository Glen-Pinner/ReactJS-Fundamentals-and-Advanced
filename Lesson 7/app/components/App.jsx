import React from 'react';

import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import {getProfiles} from '../utils/profileApi';

/*
 * Higher Order Components
 *
 *

let HOCGen = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = state;
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 500);
    }

    render() {
        return <Component {...this.props} {...this.state} />
    }
};

class Comp1 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp1</p>
                {this.props.count}
            </div>
        );
    }
}

class Comp2 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp2</p>
                {this.props.count}
            </div>
        );
    }
}

let WrappedComp1 = HOCGen(Comp1, { count: 0 });
let WrappedComp2 = HOCGen(Comp2, { count: 100 });
*/


/*
 * Using property types on a component
 *

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.props.count}</p>
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string,
    count: React.PropTypes.number.isRequired
};

MyComponent.defaultProps = {
    name: 'Joe'
};
*/


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: []
        };

        // bind click handler method for use in <button> element
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        getProfiles()
            .then(profiles => {
                this.setState({
                    profiles: profiles
                });
            });
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        });
    }

    render() {
        console.log('app rendered');
        let profiles = this.state.profiles.map(profile => {
            return (
                <Profile
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                    hobbies={profile.hobbies}/>
            );
        });

        return (
            <div>
                {profiles}
                <AddProfile addUser={this.addUser} />
                {/*<WrappedComp1/>*/}
                {/*<WrappedComp2/>*/}
                {/*<MyComponent count={4} />*/}
            </div>
        );
    }
}

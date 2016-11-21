import React from 'react';

import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import {getProfiles} from '../utils/profileApi';

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
                    key={profile.id}
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
            </div>
        );
    }
}

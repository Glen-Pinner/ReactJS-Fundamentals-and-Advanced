import React from 'react';

/*
let Profile = props => {
    console.log('profile rendered');
    return (
        <div>
                <h3>{props.name}</h3>
                <p>{props.name} is {props.age} and {props.bio}</p>
                <h3>Hobbies</h3>
                <ul>
                    {props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                </ul>
        </div>
    );
};
*/

export default class Profile extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // Full checking of all properties NOT needed as this.props is immutable
        // if (this.props.name !== nextProps.name) {
        //     return true;
        // }
        //
        // if (this.props.age !== nextProps.age) {
        //     return true;
        // }
        //
        // if (this.props.bio !== nextProps.bio) {
        //     return true;
        // }

        return nextProps.name !== this.props.name;
    }

    render() {
        console.log('profile rendered');

        let hobbies = this.props.hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>
        });

        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age} and {this.props.bio}</p>
                <h3>Hobbies</h3>
                <ul>
                    {this.props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                </ul>
            </div>
        );

    }
};
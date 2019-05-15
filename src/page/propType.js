import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
// Greeting.defaultProps = {
//     name: 'Stranger'
// };
Greeting.propTypes = {
    name: PropTypes.string
};

class PropType extends Component {
    render() {
        return (
            <div>
                <Greeting />
                asd
            </div>
        );
    }
}

export default PropType;
import React, {Component} from 'react';
import ThemeContext from '../assets/js/context';

function Test(props) {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <div>
                    <h3>{ value }</h3>
                    <p>test</p>
                    <div>{props.children}</div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

class Content extends Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Test>
                    <h1>Content</h1>
                    <h2>{this.props.title}</h2>
                </Test>
            </ThemeContext.Provider>
        )
    }
}

class Child extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        return (<div>
            <Content title="child"/>
        </div>)
    }
}

export default Child;
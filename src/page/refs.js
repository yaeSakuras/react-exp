import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FancyButtons from '../component/log';
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

class RefTest extends Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.inputRef = React.createRef();
    }
    handle = ()=> {
        console.log(this.ref.current.ref.current);
    };
    handleClick = ()=> {
        console.log(ReactDOM.findDOMNode(this.inputRef.current));
    };

    render() {
        return (
            <div>
                <FancyButtons ref={this.ref}/>
                <FancyButton ref={this.ref}>Click me!</FancyButton>
                <button onClick={this.handle}>heheda</button>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default RefTest;
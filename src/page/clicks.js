import React, {Component} from 'react';

class Clicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }
    handleSubmit =(e)=> {
        e.preventDefault();
        console.log(this.state.value);
    };
    handleChange =(e)=> {
        this.setState({
           value:e.target.value
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>name: <input type="text" value={this.state.value} onChange={this.handleChange}/></label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
}

export default Clicks;
import React, {Component} from 'react';

class Clicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            article:'',
            fruit:'grapefruit',
            sports:'a',
            checkedValues:[]

        }
        this.myRef = React.createRef();
        this.input = React.createRef();
    }
    handleSubmit =(e)=> {
        console.log(e);
        e.preventDefault();
        console.log(this.myRef.current);
        console.log(this.state);
    };
    handleChange =(e)=> {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    };
    handleCheckBoxChange = (e)=> {
        const { checked, value,name } = e.target;
        const { checkedValues } = this.state;
        if (checked && checkedValues.indexOf(value) === -1) {
            this.setState({
                [name]:[...checkedValues, value]
            })
        } else {
            this.setState({
                [name]:checkedValues.filter(item => item !== value)
            })
        }
    }

    handleClick = (e)=> {
        console.log(e);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>name: <input ref={this.myRef} type="text" name="user" value={this.state.user} onChange={this.handleChange}/></label><br/>
                    <label>文章: <textarea name="article" value={this.state.article} onChange={this.handleChange}/></label><br/>
                    checkbox:
                        <input type="checkbox" name="checkedValues" checked={this.state.checkedValues.indexOf('react') !== -1} value="react" onChange={this.handleCheckBoxChange}/>
                        <input type="checkbox" name="checkedValues" checked={this.state.checkedValues.indexOf('vue') !== -1} value="vue" onChange={this.handleCheckBoxChange}/>
                        <input type="checkbox" name="checkedValues" checked={this.state.checkedValues.indexOf('jquery') !== -1} value="jquery" onChange={this.handleCheckBoxChange}/><br/>
                    <label>sports:
                        <input type="radio" name="sports" checked={this.state.sports === 'a'} value="a" onChange={this.handleChange}/>
                        <input type="radio" name="sports" checked={this.state.sports === 'b'} value="b" onChange={this.handleChange}/>
                    </label><br/>
                    <label>水果: <select name="fruit" value={this.state.fruit} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">柠檬</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select></label><br/>
                    <input type="text" defaultValue="Bob" ref={this.input} /><br/>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">ssss</label>
                    <input type="submit" value="提交"/>
                </form>
                <div>
                    <input type="button" value="button" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Clicks;
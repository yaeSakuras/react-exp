import React, { Component } from 'react';

class Life extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1,
            status:'初始化'
        }
        console.log(this.state.status + ' : constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log(state.status + ' : getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log(this.state.status + ' : componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('更新 : shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this.state.status + ' : getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.status + ' : componentDidUpdate');
    }

    handleUpdate = ()=> {
      const i = this.state.value + 1;
      this.setState({
          value:i,
          status:'更新'
      })
    };

    render() {
        console.log(this.state.status + ' : render');
        return (
            <div style={{ 'margin':'50px' }}>
                <button onClick={this.handleUpdate}>更新组件</button><button onClick={this.handleUpdate}>卸载组件</button>
                <p>{ this.state.value }</p>
                <div>
                    { this.state.value === 1 ? <Test /> : '' }
                </div>
            </div>
        );
    }
}

class Test extends Component {
    componentWillUnmount() {
        console.log('卸载 : componentWillUnmount');
    }
    render() {
        return (<div>test</div>)
    }
}

export default Life;
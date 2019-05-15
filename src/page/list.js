import React, { Component } from 'react';

function Repeat(props) {
    console.log(props);
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

class Child extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                {React.Children.map(children, (child, i) => {
                    // Ignore the first child
                    if (i < 1) return;
                    return child
                })}
            </div>
        )
    }
}

class List extends Component {
    render() {
        return (
            <div>
                <Child>
                    <h1>111</h1>
                    <h1>2222</h1>
                </Child>
                <Repeat numTimes={10}>
                    {(index) => <div key={index}>This is item {index} in the list</div>}
                </Repeat>
                <p>List</p>
            </div>
        );
    }
}

export default List;
import React, { Component } from 'react';

function Repeat(props) {
    console.log(props);
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

class List extends Component {
    render() {
        return (
            <div>
                <Repeat numTimes={10}>
                    {(index) => <div key={index}>This is item {index} in the list</div>}
                </Repeat>
                <p>List</p>
            </div>
        );
    }
}

export default List;
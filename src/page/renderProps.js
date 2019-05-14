import React from 'react';
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>cat :{ mouse.x + ','+mouse.y }</div>
        );
    }
}

function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )}/>
            );
        }
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '400px',border:'1px solid #ddd' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}
class MouseTracker extends React.Component {
    render() {
        const MouseHoc = withMouse(Cat);
        return (
            <div>
                <h1>移动鼠标!</h1>
                <MouseHoc />
                {/*<Mouse render={mouse => (*/}
                {/*    <Cat mouse={mouse} />*/}
                {/*)}/>*/}
            </div>
        );
    }
}

export default MouseTracker;
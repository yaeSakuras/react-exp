import React from 'react';
function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

class FancyButtons extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    render() {
        return (
            <button ref={this.ref} className="FancyButton">
                www
            </button>
        );
    }
}


export default logProps(FancyButtons);
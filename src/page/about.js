import React, {Component} from 'react';
import {Route} from "react-router-dom";

function RouteWithSubRoutes(route) {
    console.log(route);
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} />
            )}
        />
    );
}

class About extends Component {
    render() {
        return (
            <div>
                <div>about</div>
                {
                    this.props.routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} />
                    })
                }
            </div>
        );
    }
}

export default About;
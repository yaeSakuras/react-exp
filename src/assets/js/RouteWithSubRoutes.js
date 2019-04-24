import React, {Fragment} from 'react';
import {Route, Redirect} from "react-router-dom";

function RouteRender(route) {
    if (route.path === '/') {
        return (
            <Route
                path='/'
                exact
                render={() => (
                    <Redirect to="/home"/>
                )}
            />
        );
    } else {
        return (
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes}/>
                )}
            />
        );
    }
}


function RouteWithSubRoutes(props) {
    const routes = props.routes;
    return (
        <Fragment>
            {
                routes.map((route, i) => {
                    return <RouteRender key={i} {...route} />
                })
            }
        </Fragment>
    )
}

export default RouteWithSubRoutes;


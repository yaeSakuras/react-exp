import React from 'react';
import { Route, Redirect } from "react-router-dom";
function RouteWithSubRoutes(route) {
    console.log(route);
    if(route.path === '/'){
        return (
            <Route
                path='/'
                exact
                render={() => (
                    <Redirect to="/home" />
                )}
            />
        );
    }else{
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

export default RouteWithSubRoutes;


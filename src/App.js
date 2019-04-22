import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import AAA from './page/a';
import List from './page/list';

const routes = [{
    path: '/home',
    component: Home
}, {
    path: '/about',
    component: About,
    routes: [{
        path: '/about/a',
        component: AAA
    }]
},{
    path: '/list',
    component: List
}];

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

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {
                    routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} />
                    })
                }
            </BrowserRouter>
        );
    }
}

export default App;

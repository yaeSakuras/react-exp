import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import AAA from './page/a';

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/about',
    component: About,
    routes: [{
        path: '/about/a',
        component: AAA
    }]
}];
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

class App extends Component {
    render() {
        return (
            <Router>
                {
                    routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} />
                    })
                }
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import routes from './router';
import RouteWithSubRoutes from './assets/js/RouteWithSubRoutes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouteWithSubRoutes routes={routes}/>
            </BrowserRouter>
        );
    }
}

export default App;

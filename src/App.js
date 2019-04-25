import React, {Component, Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import routes from './router';
import RouteWithSubRoutes from './assets/js/RouteWithSubRoutes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouteWithSubRoutes routes={routes}/>
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;

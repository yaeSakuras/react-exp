import React, {Component} from 'react';
import RouteWithSubRoutes from '../assets/js/RouteWithSubRoutes';

class About extends Component {
    render() {
        return (
            <div>
                <div>about</div>
                <RouteWithSubRoutes routes={this.props.routes}/>
            </div>
        );
    }
}

export default About;
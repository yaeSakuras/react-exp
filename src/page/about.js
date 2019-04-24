import React, {Component} from 'react';
import RouteWithSubRoutes from '../assets/js/RouteWithSubRoutes';

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
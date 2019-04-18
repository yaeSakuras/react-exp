import React, { Component, Fragment } from 'react';
import { auth } from "./services/api";

class App extends Component {
  render() {
    auth({
      username:'monkey',
      password:'123456'
    }).then(res => {
      console.log(res);
    });
    return (
      <Fragment>
        <div>hello</div>
      </Fragment>
    );
  }
}

export default App;

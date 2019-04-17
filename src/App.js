import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const env = process.env.NODE_ENV;
    const v = process.env.REACT_APP_VERSION;
    console.log(env);
    console.log(v);
    return (
      <Fragment>
        <div>hello</div>
      </Fragment>
    );
  }
}

export default App;

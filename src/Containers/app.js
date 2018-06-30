import React, { Component } from 'react';
import IndexPageContainer from './IndexPageContainer';
import { Route, Switch } from 'react-router';

// This will return all routes etc later on
class App extends Component {
  render() {
    return (
      <IndexPageContainer />
    );
  }
}

export default App;

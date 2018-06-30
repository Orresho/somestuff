import React, { Component } from 'react';
import App from './Containers/app';
/**
 * This will be the bootstrap with redux provider etc
 * 
 * 
 */
class Bootstrap extends Component {
  render() {
    return (
      <div>
        <App/>        
      </div>
    );
  }
}

export default Bootstrap;

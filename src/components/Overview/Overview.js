import React from 'react';
import Nav from '../Nav/Nav';

export class Overview extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>THIS IS THE OVERVIEW PAGE</h1>
      </div>
    );
  }
}

export default Overview;
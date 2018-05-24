import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import AllStudents from './AllStudents';
// The code below does NOT relate to your project (feel free to remove it).
// This code is just a nice BIG example of a stateful component.
// Also it is HILARIOUS :D Have fun!

export default class Root extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <AllStudents />
      </div>
    );
  }
}

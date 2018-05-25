import React, { Component } from 'react';
import axios from 'axios';

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
};

export default class CreateStudent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <label>First Name: </label>
        <input name="firstName" type="text" />
        <label>Last name: </label>
        <input name="lasttName" type="text" />
        <label>Email: </label>
        <input name="email" type="text" />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

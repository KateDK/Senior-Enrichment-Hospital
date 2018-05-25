import React, { Component } from 'react';
import axios from 'axios';

const defaultState = {
  name: '',
  address: '',
};

export default class CreateStudent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <label>Campus Name: </label>
        <input name="name" type="text" />
        <label>Address: </label>
        <input name="address" type="text" />
        <button type="submit">Save Campus</button>
      </form>
    );
  }
}

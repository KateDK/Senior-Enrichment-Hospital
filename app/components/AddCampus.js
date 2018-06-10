import React, { Component } from 'react';
import axios from 'axios';

const defaultState = {
  name: '',
  address: '',
};

export default class AddCampus extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post('/api/campuses', this.state);
    const newCampus = res.data;
    console.log(`a new campus was created with the id: ,${newCampus.id}`);
    this.setState(defaultState);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Campus Name: </label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Address: </label>
        <input
          name="address"
          type="text"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <button type="submit">Save Campus</button>
      </form>
    );
  }
}

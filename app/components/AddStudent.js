import React, { Component } from 'react';
import axios from 'axios';

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
};

export default class AddStudent extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post('/api/students', this.state);
    console.log(res.data);
    this.setState(defaultState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name: </label>
        <input
          name="firstName"
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <label>Last name: </label>
        <input
          name="lastName"
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <label>Email: </label>
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

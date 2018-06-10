import React, { Component } from 'react';
import axios from 'axios';

export default class EditCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
      changed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    //fetch campus to edit
    const res = await axios.get(`/api/campuses/${this.props.match.params.id}`);
    //set campus values as current state
    this.setState(res.data);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, changed: true });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const res = axios.put(
      `/api/campuses/${this.props.match.params.id}`,
      this.state
    );
    this.setState({ changed: false });
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
        <label>Campus Image URL: </label>
        <input
          name="imageUrl"
          type="text"
          value={this.state.imageUrl}
          onChange={this.handleChange}
        />
        <label>Address: </label>
        <input
          name="address"
          type="text"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <label>Description: </label>
        <input
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={this.state.changed === false}>
          Save Changes
        </button>
      </form>
    );
  }
}

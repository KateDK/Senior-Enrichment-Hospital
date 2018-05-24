import React, { Component } from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';

export default class AllCampuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/campuses');
    this.setState({ campuses: res.data });
  }

  render() {
    return (
      <div>
        {this.state.campuses.map(campus => (
          <SingleCampus key={campus.id} campus={campus} />
        ))}
      </div>
    );
  }
}

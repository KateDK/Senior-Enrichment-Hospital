import React, { Component } from 'react';
import axios from 'axios';
import SingleCampusItem from './SingleCampusItem';

export default class AllCampuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
    };
    this.removeCampus = this.removeCampus.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('/api/campuses');
    this.setState({ campuses: res.data });
  }

  async removeCampus(id) {
    await axios.delete(`api/campuses/${id}`);
    this.setState({
      campuses: this.state.campuses.filter(campus => campus.id !== id),
    });
  }

  render() {
    return (
      <div>
        {this.state.campuses.map(campus => (
          <SingleCampusItem
            key={campus.id}
            campus={campus}
            removeCampus={this.removeCampus}
          />
        ))}
      </div>
    );
  }
}

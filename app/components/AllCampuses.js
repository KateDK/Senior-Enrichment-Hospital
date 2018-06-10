import React, { Component } from 'react';
import axios from 'axios';
import SingleCampusItem from './SingleCampusItem';
import { Link } from 'react-router-dom';

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
    if (this.state.campuses.length === 0) {
      return <h1>There are currently no campuses listed</h1>;
    }
    return (
      <div>
        {this.state.campuses.map(campus => (
          <SingleCampusItem
            key={campus.id}
            campus={campus}
            removeCampus={this.removeCampus}
          />
        ))}
        <button>
          <Link to="/campuses/addCampus">Add Campus</Link>
        </button>
      </div>
    );
  }
}

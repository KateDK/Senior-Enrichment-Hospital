import React, { Component } from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudentItem';

class Campus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
    };
    this.removeCampus = this.removeCampus.bind(this);
  }
  async componentDidMount() {
    const res = await axios.get(`/api/campuses/${this.props.match.params.id}`);
    this.setState({ campus: res.data });
  }
  async removeCampus(id) {
    await axios.delete(`/api/campuses/${id}`);
    this.setState({ campus: null });
  }
  render() {
    if (!this.state.campus) {
      return <h1>No Such Campus!</h1>;
    } else if (!this.state.campus.name) {
      return <div>Fetching Data...</div>;
    } else {
      return (
        <div>
          <img src={this.state.campus.imageUrl} />
          <h2>{this.state.campus.name}</h2>
          <p>{this.state.campus.description}</p>
          <p>{this.state.campus.address}</p>
          <button onClick={() => this.removeCampus(this.state.campus.id)}>
            Delete Campus
          </button>
          <span>
            <h3>STUDENTS:</h3>
            {this.state.campus.students.map(student => (
              <SingleStudent key={student.id} student={student} />
            ))}
          </span>
        </div>
      );
    }
  }
}
export default Campus;

import React, { Component } from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudentItem';

class Campus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
    };
  }
  async componentDidMount() {
    const res = await axios.get(`/api/campuses/${this.props.match.params.id}`);
    this.setState({ campus: res.data });
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
          <span>
            <h3>STUDENTS:</h3>
            {/*todo: set student list for this campus*/}
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

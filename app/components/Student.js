import React, { Component } from 'react';
import axios from 'axios';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      student: {},
    };
    this.removeStudent = this.removeStudent.bind(this);
  }
  async componentDidMount() {
    const res = await axios.get(`/api/students/${this.props.match.params.id}`);
    this.setState({ student: res.data });
  }
  async removeStudent(id) {
    await axios.delete(`/api/students/${id}`);
    this.setState({ student: null });
  }
  render() {
    if (!this.state.student || this.state.student === null) {
      return <h1>No Such Student!</h1>;
    } else if (!this.state.student.firstName) {
      return <div>Fetching Data...</div>;
    } else {
      const campusName = this.state.student.campus
        ? this.state.student.campus.name
        : 'No Campus';
      return (
        <div>
          <img src={this.state.student.imageUrl} />
          <h2>
            {`${this.state.student.firstName} ${this.state.student.lastName}`}
          </h2>
          <p>{this.state.student.gpa}</p>
          <span>
            <h3>{campusName}</h3>
          </span>
          <button onClick={() => this.removeStudent(this.state.student.id)}>
            Delete Student
          </button>
        </div>
      );
    }
  }
}

export default Student;

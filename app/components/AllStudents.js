import React, { Component } from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudent';

export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/students');
    this.setState({ students: res.data });
  }

  render() {
    return (
      <div>
        {this.state.students.map(student => (
          <SingleStudent key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

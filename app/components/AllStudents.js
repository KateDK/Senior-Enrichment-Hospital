import React, { Component } from 'react';
import axios from 'axios';
import SingleStudentItem from './SingleStudentItem';

export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
    this.removeStudent = this.removeStudent.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('/api/students');
    this.setState({ students: res.data });
  }

  async removeStudent(id) {
    await axios.delete(`api/students/${id}`);
    this.setState({
      students: this.state.students.filter(student => student.id !== id),
    });
  }

  render() {
    return (
      <div>
        {this.state.students.map(student => (
          <SingleStudentItem
            key={student.id}
            student={student}
            removeStudent={this.removeStudent}
          />
        ))}
      </div>
    );
  }
}

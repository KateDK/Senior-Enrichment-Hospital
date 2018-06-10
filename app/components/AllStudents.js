import React, { Component } from 'react';
import axios from 'axios';
import SingleStudentItem from './SingleStudentItem';
import AddStudent from './AddStudent';
import { Link } from 'react-router-dom';

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
    await axios.delete(`/api/students/${id}`);
    this.setState({
      students: this.state.students.filter(student => student.id !== id),
    });
  }

  render() {
    if (this.state.students.length === 0) {
      return <h1>There are currently no students listed</h1>;
    }
    return (
      <div>
        {this.state.students.map(student => (
          <SingleStudentItem
            key={student.id}
            student={student}
            removeStudent={this.removeStudent}
          />
        ))}
        <button>
          <Link to="/students/addStudent">Add Student</Link>
        </button>
      </div>
    );
  }
}

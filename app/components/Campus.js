import React, { Component } from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudentItem';
import { Link } from 'react-router-dom';

class Campus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
    };
    this.removeCampus = this.removeCampus.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
  }
  async componentDidMount() {
    const res = await axios.get(`/api/campuses/${this.props.match.params.id}`);
    this.setState({ campus: res.data });
  }
  async removeCampus(id) {
    await axios.delete(`/api/campuses/${id}`);
    this.setState({ campus: null });
  }
  async removeStudent(id) {
    await axios.delete(`/api/students/${id}`);
    var newState = { ...this.state };
    newState.campus.students = newState.campus.students.filter(
      student => student.id !== id
    );
    this.setState(newState);
  }
  render() {
    if (!this.state.campus) {
      return <h1>No Such Campus!</h1>;
    } else if (!this.state.campus.name) {
      return <div>Fetching Data...</div>;
    } else {
      const studentRender = this.state.campus.students.map(student => (
        <SingleStudent
          key={student.id}
          student={student}
          removeStudent={this.removeStudent}
        />
      ));
      const noStudents = <h2>No students attend this campus</h2>;
      return (
        <div>
          <img src={this.state.campus.imageUrl} />
          <h2>{this.state.campus.name}</h2>
          <p>{this.state.campus.description}</p>
          <p>{this.state.campus.address}</p>
          <Link to={`/campuses/${this.state.campus.id}/edit`}>
            <button>Edit Campus</button>
          </Link>
          <button onClick={() => this.removeCampus(this.state.campus.id)}>
            Delete Campus
          </button>
          <span>
            <h3>STUDENTS:</h3>
            {this.state.campus.students.length > 0 ? studentRender : noStudents}
          </span>
        </div>
      );
    }
  }
}
export default Campus;

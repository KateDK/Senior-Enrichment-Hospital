import React, { Component } from 'react';
import axios from 'axios';

//import ReactDOM from 'react-dom';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      student: {},
    };
  }
  //const studentView = props.studentView;
  async componentDidMount() {
    const res = await axios.get(`/api/students/${this.props.match.params.id}`);
    this.setState({ student: res.data });
  }
  render() {
    if (!this.state.student.firstName) {
      return <div>Fetching Data...</div>;
    } else {
      return (
        <div>
          <img src={this.state.student.imageUrl} />
          <h2>
            {`${this.state.student.firstName} ${this.state.student.lastName}`}
          </h2>
          <p>{this.state.student.gpa}</p>
          <span>
            <h3>{this.state.student.campus.name}</h3>
          </span>
        </div>
      );
    }
  }
}

export default Student;

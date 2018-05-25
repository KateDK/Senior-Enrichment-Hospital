import React, { Component } from 'react';
import SingleStudentItem from './SingleStudentItem';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import Student from './Student';
import NavBar from './NavBar';
import Campus from './Campus';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
} from 'react-router-dom';

export default class Root extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    // return (
    //   <div>
    //     <AllStudents />
    //     <AllCampuses />
    //   </div>
    // );
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <div>
              <Switch>
                <Route exact path="/campuses" component={AllCampuses} />
                <Route exact path="/campuses/addCampus" component={AddCampus} />
                <Route path="/campuses/:id" component={Campus} />
                <Route exact path="/students" component={AllStudents} />
                <Route
                  exact
                  path="/students/addStudent"
                  component={AddStudent}
                />
                <Route path="/students/:id" component={Student} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

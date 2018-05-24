import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
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
          <Switch>
            <Route path="/campuses" component={AllCampuses} />
            <Route path="/students" component={AllStudents} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

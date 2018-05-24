import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
  Link,
} from 'react-router-dom';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';

const NavBar = props => {
  return (
    <div className="nav-bar">
      <Link to="/students">STUDENTS</Link>
      <Link to="/campuses">CAMPUSES</Link>
    </div>
  );
};

export default NavBar;

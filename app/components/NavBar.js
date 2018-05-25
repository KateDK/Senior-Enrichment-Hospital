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
      <div>
        <button>
          <Link to="/students">STUDENTS</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/campuses">CAMPUSES</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;

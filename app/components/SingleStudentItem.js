import React from 'react';
import { Link } from 'react-router-dom';

const SingleStudent = props => {
  const student = props.student;
  const campusName = student.campus ? student.campus.name : '';
  return (
    <div>
      <Link to={`/students/${student.id}`}>
        <img src={student.imageUrl} />
        <h2>{`${student.firstName} ${student.lastName}`}</h2>
      </Link>
      <p>{campusName}</p>
    </div>
  );
};

export default SingleStudent;

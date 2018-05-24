import React from 'react';
import { Link } from 'react-router-dom';

const SingleStudent = props => {
  const student = props.student;
  return (
    <div>
      <Link to={`/students/${student.id}`}>
        <img src={student.imageUrl} />
        <h2>{`${student.firstName} ${student.lastName}`}</h2>
      </Link>
      <p>{student.campus.name}</p>
    </div>
  );
};

export default SingleStudent;

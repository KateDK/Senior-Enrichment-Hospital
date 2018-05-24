import React from 'react';

const SingleStudent = props => {
  const student = props.student;
  return (
    <div>
      <img src={student.imageUrl} />
      <h2>{`${student.firstName} ${student.lastName}`}</h2>
      <p>{student.campus.name}</p>
    </div>
  );
};

export default SingleStudent;

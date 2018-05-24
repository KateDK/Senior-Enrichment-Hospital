import React from 'react';

const Student = props => {
  const studentView = props.studentView;
  return (
    <div>
      <img src={studentView.imageUrl} />
      <h2>{`${studentView.firstName} ${studentView.lastName}`}</h2>
      <p>{studentView.gpa}</p>
      <div>
        <h3>{studentView.campus.namne}</h3>
      </div>
    </div>
  );
};

export default Student;

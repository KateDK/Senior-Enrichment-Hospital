import React from 'react';

const SingleCampus = props => {
  const campus = props.campus;
  return (
    <div>
      <img src={campus.imageUrl} />
      <h2>{campus.name}</h2>
      {/*todo add clickable number of students*/}
    </div>
  );
};

export default SingleCampus;

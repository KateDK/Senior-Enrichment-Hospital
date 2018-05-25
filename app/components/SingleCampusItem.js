import React from 'react';
import { Link } from 'react-router-dom';

const SingleCampusItem = props => {
  const campus = props.campus;
  return (
    <div>
      <Link to={`/campuses/${campus.id}`}>
        <img src={campus.imageUrl} />
        <h2>{campus.name}</h2>
      </Link>
      {/*todo add clickable number of students*/}
      <p>{campus.students.length} students</p>
    </div>
  );
};

export default SingleCampusItem;

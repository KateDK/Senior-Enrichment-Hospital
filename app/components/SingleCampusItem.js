import React from 'react';
import { Link } from 'react-router-dom';

const SingleCampusItem = props => {
  const campus = props.campus;
  const removeCampus = props.removeCampus;
  return (
    <div>
      <Link to={`/campuses/${campus.id}`}>
        <img src={campus.imageUrl} />
        <h2>{campus.name}</h2>
      </Link>
      <p>{campus.students.length} students</p>
      <Link to={`/campuses/${campus.id}/edit`}>
        <button>Edit Campus</button>
      </Link>
      <button onClick={() => removeCampus(campus.id)}>Delete Campus</button>
    </div>
  );
};

export default SingleCampusItem;

import React from 'react';

const list = ({ id, description, explication }) => {
  return (
    <li key={id}>
          <p className="definition">
            <b>{description.bold}</b> {description.noBold}
          </p>
          <p className="explication">
            {explication}
          </p>
        </li>
  );
};

export default list;
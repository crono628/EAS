import React from 'react';

const Cell = (props) => {
  return (
    <div
      className="cell"
      style={props.style}
      onMouseEnter={props.onMouseEnter}
    ></div>
  );
};

export default Cell;

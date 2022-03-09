import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import uniqid from 'uniqid';

const Board = () => {
  let boardWidth = 10;

  const [colArr, setColArr] = useState(
    Array(boardWidth * boardWidth).fill(null)
  );

  const handleChange = (i) => {
    const newColor = colArr.slice();
    newColor[i] = 'red';
    setColArr(newColor);
  };

  const renderCell = (i) => {
    return (
      <Cell
        key={uniqid()}
        style={{ backgroundColor: colArr[i] }}
        onMouseEnter={() => handleChange(i)}
      />
    );
  };

  let screen = [];

  for (let i = 0; i < boardWidth; i++) {
    let row = [];
    for (let j = 0; j < boardWidth; j++) {
      row.push(<div key={uniqid()}>{renderCell(i * boardWidth + j)}</div>);
    }
    screen.push(
      <div key={uniqid()} className="row">
        {row}
      </div>
    );
  }

  return <div className="container">{screen}</div>;
};

export default Board;

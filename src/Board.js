import React from "react";
import Cell from "./Cell";
import uniqid from "uniqid";

const Board = (props) => {
  const renderCell = (i) => {
    return (
      <Cell
        key={uniqid()}
        style={{ backgroundColor: props.backgroundColor[i] }}
        onMouseEnter={() => props.onMouseEnter(i)}
      />
    );
  };

  const boardWidth = props.boardWidth;

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

  return <div className="screen">{screen}</div>;
};

export default Board;

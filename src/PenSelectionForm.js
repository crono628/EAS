import React from "react";
import Board from "./Board";

const PenSelectionForm = (props) => {
  return (
    <div className="fieldset">
      <form onSubmit={props.onSubmit}>
        <fieldset>
          Pen Settings
          <input
            onChange={props.onChange}
            min="5"
            max="30"
            type="range"
            className="slider"
            id="slider"
          />
          {props.value}
        </fieldset>
      </form>

      <Board
        backgroundColor={props.backgroundColor}
        onMouseEnter={(i) => props.onMouseEnter(i)}
        boardWidth={props.boardWidth}
      />
    </div>
  );
};

export default PenSelectionForm;

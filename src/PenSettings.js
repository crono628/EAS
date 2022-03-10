import React from 'react';
import Board from './Board';

const PenSettings = (props) => {
  return (
    <div>
      <div className="fieldset">
        <fieldset>
          <label htmlFor="slider">Pen Settings:</label>
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
      </div>
      <Board
        backgroundColor={props.backgroundColor}
        onMouseEnter={(i) => props.onMouseEnter(i)}
        boardWidth={props.boardWidth}
      />
    </div>
  );
};

export default PenSettings;

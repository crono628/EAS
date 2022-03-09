import React from "react";

const PenSelectionForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <fieldset>
          <legend>Pen Settings</legend>
          <input
            onChange={props.onChange}
            min="2"
            max="50"
            value="10"
            type="range"
            className="slider"
            id="slider"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default PenSelectionForm;

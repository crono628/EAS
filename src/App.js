import React, { useState, useEffect } from "react";
import PenSelectionForm from "./PenSelectionForm";
import "./styles.css";

const App = () => {
  const [boardWidth, setBoardWidth] = useState(null);
  const [colArr, setColArr] = useState(Array(boardWidth * boardWidth).fill(""));

  useEffect(() => {
    setBoardWidth(document.getElementById("slider").value);
  });

  const handleHover = (i) => {
    const newColor = colArr.slice();
    newColor[i] = "red";
    setColArr(newColor);
  };

  let defaultColor = "white";

  const handleSlide = (e) => {
    setBoardWidth(e.target.value);
    let copy = colArr.slice().fill(defaultColor);
    setColArr(copy);
  };

  return (
    <div className="container">
      <PenSelectionForm
        backgroundColor={colArr}
        onMouseEnter={(i) => handleHover(i)}
        boardWidth={boardWidth}
        onChange={handleSlide}
        value={`${boardWidth} x ${boardWidth}`}
      />
    </div>
  );
};

export default App;

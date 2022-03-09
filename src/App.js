import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./styles.css";

const App = () => {
  const [boardWidth, setBoardWidth] = useState(
    document.getElementById("slider").value
  );
  const [colArr, setColArr] = useState(
    Array(boardWidth * boardWidth).fill("white")
  );

  useEffect(() => {
    setBoardWidth(document.getElementById("slider").value);
  }, [boardWidth]);

  const handleHover = (i) => {
    const newColor = colArr.slice();
    newColor[i] = "red";
    setColArr(newColor);
  };

  const handleSlide = (e) => {
    setBoardWidth(e.target.value);
  };

  return (
    <div>
      <Board
        backgroundColor={colArr}
        onMouseEnter={(i) => handleHover(i)}
        boardWidth={boardWidth}
        onChange={handleSlide}
      />
    </div>
  );
};

export default App;

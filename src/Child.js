import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {
  return (
    <div
      className="child"
      style={{ backgroundColor: childColor }}
      onClick={onChangeColor}
    />
  );
}

export default Child;

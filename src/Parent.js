import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChildClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    const childrenColor = getRandomColor();
    setChildrenColor(childrenColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChildClick} childColor={childrenColor} />
      <Child onChangeColor={handleChildClick} childColor={childrenColor} />
    </div>
  );
}

export default Parent;

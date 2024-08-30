import { useState } from "react";

const generateColor = () => {
  const term = "0123456789ABCDEF";
  const newColor = [];

  for (let i = 0; i < 6; i++) {
    const choose = Math.floor(Math.random() * 16, 0);
    newColor.push(term[choose]);
  }

  const randomBackgroundColor = "#" + newColor.join("");
  console.log(randomBackgroundColor);

  return randomBackgroundColor;
};

export default function Color() {
  const [color, setColor] = useState("");

  function changeColor() {
    return setColor(generateColor());
  }

  return (
    <div style={{ background: color }}>
      <h1>Random Color</h1>
      <button onClick={changeColor}>Altere a cor de fundo</button>
    </div>
  );
}

import { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  }

  return (
    <div>
      <h1 style={{ color }}>ChangeColor</h1>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  )
}

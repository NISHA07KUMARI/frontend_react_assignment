import React, { useState } from "react";

function Average() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(num1, num2, num3);
    const res = (Number(num1) + Number(num2) + Number(num3)) / 3;
    console.log(res);
    console.log(event.target);
    alert(`Average of numbers : ${res}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Num1-
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </label>
      <label>
        Num2-
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <label>
        Num3-
        <input
          type="number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
export default Average;

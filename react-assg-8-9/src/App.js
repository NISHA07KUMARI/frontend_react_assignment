import { useState } from "react";
import "./App.css";

function App() {
  const [pahada, setPahada] = useState([]);
  const [position, setPosition] = useState(1);

  const multiply = (event) => {
    // console.log("inside onsubmit--", pahada);
    event.preventDefault();

    console.log("5 *", position);

    pahada.push(5 * position);
    setPahada(pahada);

    console.log("multiplication-", pahada);
    setPosition(position + 1);
  };

  return (
    <div>
      <form onSubmit={multiply}>
        <input
          value="Click to generate Multiplication tables of 
          5"
          type="submit"
        />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Number</th>
            <th>multiply by 5</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {pahada.map((current, index) => {
            return (
              <tr key={current}>
                <td>{index + 1}</td>
                <td>* 5 =</td>
                <td>{current}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

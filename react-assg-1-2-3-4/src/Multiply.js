import React from "react";
import "./App.css";

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = 1;

function Multiply() {
  return (
    <div>
      <tbody>
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>multiply by 5</th>
              <th>Result</th>
            </tr>
          </thead>
          {n.map((x) => {
            res = x * 5;
            // console.log({ x });
            return (
              <tr className="tr" key={n}>
                <td> {x} </td>
                <td>* 5</td>
                <td>{res}</td>
              </tr>

              //console.log(res);
            );
          })}
          ;
        </table>
      </tbody>
    </div>
  );
}

export default Multiply;

import React from "react";
import "./App.css";

function App(props) {
  const users = props.user;

  // console.log(!(users.location)? "BANGALORE" : users.location);
  // console.log(!(users.company)? "WIPRO" : users.company);

  return (
    <div>
      <h2>Assignment 5</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company_Location</th>
            <th>Company_Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((use) => {
            return (
              <tr className="tr" key={use.id}>
                {!use.companyLocation ? (
                  <td className="td">BANGALORE</td>
                ) : (
                  <td className="td">{use.companyLocation}</td>
                )}

                {!use.companyName ? (
                  <td className="td">WIPRO</td>
                ) : (
                  <td className="td">{use.companyName}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

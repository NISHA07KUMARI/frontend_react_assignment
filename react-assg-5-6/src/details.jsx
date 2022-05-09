import React from "react";
import "./App.css";

function Details(props) {
  const { employees } = props;
  // const employees = props.employees;
  //console.log("inside details:", employees);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr className="tr" key={employee.id}>
                <td className="td">{employee.id}</td>
                <td className="td">{employee.name}</td>
                <td className="td">{employee.location}</td>
                <td className="td">{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Details;

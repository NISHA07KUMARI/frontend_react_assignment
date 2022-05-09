import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function App(props) {
  const userData = props.userData;
  console.log("inside App-------", userData);
  console.log("generate--", generateRange(5, 15));
  userData.map((usr) => {
    return console.log(usr.name);
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>name</th>
          <th>city</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => {
          return (
            <tr className="tr" key={user.id}>
              <td className="td">{user.name}</td>
              <td className="td">{user.cities}</td>
              <td className="td">{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

App.defaultProps = {
  userData: [
    {
      name: "Steve",
      cities: ["Bangalore", " Chennai"],
      age: 18,
    },
  ],
};

App.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      cities: PropTypes.arrayOf(PropTypes.string),
      age: PropTypes.oneOf(generateRange(18, 60)),
    })
  ),
};

function generateRange(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

export default App;

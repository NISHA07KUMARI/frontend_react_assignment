//import logo from "./logo.svg";
import "./App.css";

const Emp = [
  { id: "1", name: "Nisha", Email: "nish.ku@gmail.com" },
  { id: "2", name: "Alok", Email: "alok.ku@gmail.com" },
  { id: "3", name: "Sanyam", Email: "er.samnyam@gmail.com" },
  { id: "4", name: "Shivani", Email: "shivanigupta@gmail.com" },
  { id: "5", name: "Smriti", Email: "sim09sept@gmail.com" },
];

function App() {
  return (
    <div className="App">
      <p>Happy Learning React!</p>

      <p>
        <table className="table">
          <thead>
            <tr>
              <th>Emp Name</th>
              <th> Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          {Emp.map(({ id, name, Email }) => (
            <tr className="tr" key={id}>
              <td className="td">{id} </td>
              <td className="td">{name}</td>
              <td className="td">{Email}</td>
            </tr>
          ))}
        </table>
      </p>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./header";
import emps from "./employeeData";
import Details from "./details"
import App from "./App";
import users from "./user";



function Main() {
  const [employees] = React.useState(emps);
  const [user] = React.useState(users);
  

  console.log("employee details inside main: ",employees);
  console.log("user details inside main: ", user);


  return (
    <div className="Main">
      <Header />
      <Details employees={employees} />
      <App user={user}/>
      
    </div>
  );
}

export default Main;

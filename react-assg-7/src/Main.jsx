import React, { useState } from "react";
import data from "./userData";
import App from "./App";
//import Check from "./Check";

function Main() {
  const [userData] = useState(data);
  console.log("inside main:", userData);
  return (
    <div className="Main">
      <App userData={userData} />
    </div>
  );
}
//<Check />
//<App userData={userData}/>
export default Main;

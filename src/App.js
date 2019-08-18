import React from "react";
import "./App.css";

//** COMPONENTS  **//

import Data from "./components/Data";
import BarChart from "./components/BarChart";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <Data /> */}
      <React.Fragment>
        <NavBar />
        <BarChart />
      </React.Fragment>
    </>
  );
}

export default App;

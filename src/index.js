import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

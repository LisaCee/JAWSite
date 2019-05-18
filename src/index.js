import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// import { Container, Row, Col } from "reactstrap";
// import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

import {BasicRows} from "../src/Components/Gallery";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

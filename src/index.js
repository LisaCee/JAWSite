import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Container, Row, Col } from "reactstrap";
import Sidebar from './Components/Sidebar';
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col sm="12" xl="3">
    <Sidebar />
    </Col>
    <Col>
      <Main />
      </Col>
      </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

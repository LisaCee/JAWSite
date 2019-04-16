import React from "react";
import "../styles/main.css";
import Sidebar from "../Components/Sidebar.js";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col sm="6" md="4">
              <img
                src={require("../images/JAWheart.jpg")}
                alt="concrete lego hearts"
              />
            </Col>
            <Col sm="6" md="4">
              <img src="http://placekitten.com/200/200" alt="kitty" />
            </Col>
            <Col sm="6" md="4">
              <img src="http://placekitten.com/200/200" alt="kitty" />
            </Col>
            <Col sm="6" md="4">
              <img src="http://placekitten.com/200/200" alt="kitty" />
            </Col>
            <Col sm="6" md="4">
              <img src="http://placekitten.com/200/200" alt="kitty" />
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

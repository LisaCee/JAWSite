import React from "react";
import "../styles/main.css";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src={require("../images/JAWheart.jpg")}
              alt="concrete lego hearts"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

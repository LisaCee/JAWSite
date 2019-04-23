import React from "react";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar";
import "../styles/main.css";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col md = "12" xl="3">
              <Sidebar />
            </Col>

            <Col lg="9">
              <div className="main">
                <Row>
                  <Col sm="10" md="4" >
                    <img
                      src="http://placekitten.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col sm="10" md="4">
                    <img
                      src="http://lorempixel.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="10">
                    <img
                      src="http://lorempixel.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col sm="10">
                    <img
                      src="http://placekitten.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col sm="10">
                    <img
                      src="http://lorempixel.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col sm="10">
                    <img
                      src="http://lorempixel.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

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
            <Col sm="12" lg="3">
              <Sidebar />
            </Col>

            <Col lg="9">
              <div className="main">
                <Row>
                  <Col md="6" lg="4">
                    <img
                      src="http://placekitten.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col md="6" lg="4">
                    <img
                      src="http://lorempixel.com/300/400"
                      alt="placeholder"
                    />
                  </Col>
                  <Col md="6" lg="4">
                    <img
                      src="https://www.fillmurray.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col md="6" lg="4">
                    <img
                      src="http://placekitten.com/300/400"
                      alt="placeholder"
                    />
                  </Col>
                  <Col md="6" lg="4">
                    <img
                      src="http://lorempixel.com/300/300"
                      alt="placeholder"
                    />
                  </Col>
                  <Col md="6" lg="4">
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

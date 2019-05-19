import React from 'react';
import '../styles/main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import BasicRows from './Gallery';

const Main = () => (
  <div>
    <Container>
      <Row>
        <Col sm="12" lg="3">
          <Sidebar />
        </Col>
        <Col>
          <Row>
            <Col>
              <BasicRows />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Main;

import React from 'react';
import '../styles/sidebar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
const Sidebar = () => (
  // <div className='container-fluid h-100'>
  <div className="row">
    {/* <aside className='col-12 col-lg-3'> */}
    <Navbar bg="light" expand="md" className="sidebar">
      <Navbar.Brand href="#home">jaw</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Street Art</Nav.Link>
          <Nav.Link href="#">Fine Art</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">
            <i className="fab fa-instagram fa-lg" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* </aside> */}
  </div>
  // </div>
);
export default Sidebar;

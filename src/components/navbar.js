import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/navbar.css"

export const MyNav = () =>  {
  return (
    
      <Navbar  className="fixed-top vw-100 custom-navbar" id='navbarMain'>
        <Container>
          <Navbar.Brand href="#sectionCarrousel">
            N E U R O T I C A
            </Navbar.Brand>
          <Nav className="me-auto p-0">
            <Nav.Link href="#sectionCarrousel">Nosotros</Nav.Link>
            <Nav.Link href="#sectionServicios">Servicios</Nav.Link>
            <Nav.Link href="#sectionContacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
  );
}

export default MyNav;
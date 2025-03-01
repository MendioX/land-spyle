import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export const MyNav = () =>  {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#sectionCarrousel">
            Spyle
            {/* <i class="fa-solid fa-s"></i> 
            <i class="fa-solid fa-p"></i> 
            <i class="fa-solid fa-y"></i> 
            <i class="fa-solid fa-l"></i> 
            <i class="fa-solid fa-e"></i>  */}
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#sectionCarrousel">Nosotros</Nav.Link>
            <Nav.Link href="#sectionProductos">Soluciones</Nav.Link>
            <Nav.Link href="#sectionContacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
  );
}

export default MyNav;
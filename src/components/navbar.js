import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export const MyNav = () =>  {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            Spyle
            {/* <i class="fa-solid fa-s"></i> 
            <i class="fa-solid fa-p"></i> 
            <i class="fa-solid fa-y"></i> 
            <i class="fa-solid fa-l"></i> 
            <i class="fa-solid fa-e"></i>  */}
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Soluciones</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  );
}

export default MyNav;
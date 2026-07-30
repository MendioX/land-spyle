import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import "../css/navbar.css"

export const MyNav = () =>  {
  return (

      <Navbar expand="md" className="fixed-top vw-100 custom-navbar" id='navbarMain'>
        <Container>
          <Navbar.Brand href="#sectionCarrousel" className=''>
            {`</ S P Y L E >`}
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarMainCollapse" />
          <Navbar.Collapse id="navbarMainCollapse">
            <Nav className="ms-auto p-0">
              <Nav.Link href="#sectionCarrousel">Nosotros</Nav.Link>
              <Nav.Link href="#sectionServicios">Servicios</Nav.Link>
              <Nav.Link href="#sectionProyectos">Proyectos</Nav.Link>
              <Nav.Link href="#sectionContacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


  );
}

export default MyNav;
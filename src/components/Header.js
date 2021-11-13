import React from 'react';
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap';
import { FcAddImage } from 'react-icons/fc';

const Header = () => {
   return (
    <Navbar bg="light" variant="light">
    <Container>
      <NavbarBrand href="/">
        <img
          alt="Logo"
          src="./logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      
      </NavbarBrand>
      <Nav.Link href="/new" className="header-icon">Agregar nuevo artículo <FcAddImage /></Nav.Link>
    </Container>
  </Navbar>
   )
}

export default Header;
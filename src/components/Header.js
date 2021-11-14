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
          src="../images/logo-microsip.svg"
          className="d-inline-block align-top img-fluid"
        />
      </NavbarBrand>
      <Nav.Link href="/new" className="header-icon">
        Agregar nuevo artículo <FcAddImage />
      </Nav.Link>
    </Container>
  </Navbar>
   )
}

export default Header;
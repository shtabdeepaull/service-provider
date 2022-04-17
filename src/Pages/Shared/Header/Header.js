import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='text-bold' as={CustomLink} to="/">Edulab Visa Consultancy Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
              <Nav.Link as={CustomLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={CustomLink} to="/aboutme">AboutMe</Nav.Link>
              <Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
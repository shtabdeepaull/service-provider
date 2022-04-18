import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
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
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link  href="home#reviews">Reviews</Nav.Link>
              <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
              <Nav.Link as={CustomLink} to="/aboutme">AboutMe</Nav.Link>
              {
                user?
                  <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                :
                <Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
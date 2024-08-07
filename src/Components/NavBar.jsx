import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import LanguageToggleButton from './LanguageToggleButton';
import ThemeToggleButton from './ThemeToggleButton';
import ThemeContext from '../context/ThemeContext';  // Import the theme context

function NavBar() {
  const { theme } = useContext(ThemeContext);  // Use the theme context

  return (
    <Navbar expand="lg" className={`bg-${theme} navbar-${theme}`}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Product App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link>
              <LanguageToggleButton />
            </Nav.Link>
            <Nav.Link>
              <ThemeToggleButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

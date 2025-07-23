// src/components/NavBar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/thaat-logo.png'; // You'll need to add your logo

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  const scrollToSection = (sectionId) => {
    closeNav();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar 
      variant="dark"
      expand="lg" 
      fixed="top" 
      className="py-3"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#" onClick={() => scrollToSection('hero')} className="d-flex align-items-center">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top me-2"
            alt="Thaat Kathak Academy Logo"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" onClick={() => scrollToSection('hero')}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link href="#classes" onClick={() => scrollToSection('classes')}>Classes</Nav.Link>
            <Nav.Link href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</Nav.Link>
            <Nav.Link href="#performances" onClick={() => scrollToSection('performances')}>Performances</Nav.Link>
            <Nav.Link href="#contact" onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
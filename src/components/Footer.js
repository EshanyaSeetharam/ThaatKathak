import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="gold-text mb-4">THAAT KATHAK ACADEMY</h5>
            <p>Founded in 2018 by Smitha Srinivasan, Thaat Kathak Academy is dedicated to preserving and promoting the classical dance form of Kathak.</p>
            <div className="mt-3">
              <a href="https://instagram.com/thaat_kathak_academy" target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="gold-text mb-4">QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#classes" onClick={(e) => { e.preventDefault(); scrollToSection('classes'); }} className="text-white text-decoration-none">
                  Classes
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="text-white text-decoration-none">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#performances" onClick={(e) => { e.preventDefault(); scrollToSection('performances'); }} className="text-white text-decoration-none">
                  Performances
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="gold-text mb-4">CONTACT US</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt gold-text me-2"></i> 
              123 Dance Avenue, Bengaluru, Karnataka
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone gold-text me-2"></i> 
              +91 98451 32558
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope gold-text me-2"></i> 
              info@thaatkathak.com
            </p>
            <p className="mb-2">
              <i className="bi bi-instagram gold-text me-2"></i> 
              @thaat_kathak_academy
            </p>
          </Col>
        </Row>
        <hr className="mt-4 mb-4" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }} />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Thaat Kathak Academy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

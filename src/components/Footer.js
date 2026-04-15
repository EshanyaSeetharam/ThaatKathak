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
          <Col md={4}>
            <h5 className="gold-text mb-4">CONTACT: </h5>
            <p className="mb-2">
              <i className="bi bi-telephone gold-text me-2"></i> 
              +91 98451 32558
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope gold-text me-2"></i> 
              smithasrinivasan@gmail.com
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

// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import VideoHero from '../components/VideoHero';
import ImageCarousel from '../components/ImageCarousel';
import founderImage from '../assets/images/founder.jpg'; // Image of Smitha Srinivasan
import performanceImage1 from '../assets/images/performance1.jpeg';
import performanceImage2 from '../assets/images/performance2.jpg';  
import performanceImage3 from '../assets/images/performance3.jpg';
import performanceImage4 from '../assets/images/performance4.jpg'; 
import performanceImage5 from '../assets/images/performance5.jpeg'; 
import performanceImage6 from '../assets/images/performance6.jpeg';
import performanceImage7 from '../assets/images/performance7.jpeg';
import show1 from '../assets/images/Show1.jpeg';
import classImage from '../assets/images/class1.jpeg';

function Home() {
  // Upcoming shows data
  const upcomingShows = [
    {
      id: 1,
      title: "Akhanda Arpan",
      date: "July 13 2025",
      venue: "Alliance Française De Bangalore",
      time: "12:45 PM to 8 PM"
    }
    // {
    //   id: 2,
    //   title: "Kathak Utsav",
    //   date: "July 8 2025",
    //   venue: "Ravindra Kalakshetra, Bengaluru",
    //   time: "5:00 PM"
    // }
  ];
  
  // Gallery images - only use actual images, no placeholders
  const galleryImages = [
    { id: 1, src: performanceImage1, alt: "Performance 1" },
    { id: 2, src: performanceImage2, alt: "Performance 2" },
    { id: 3, src: performanceImage3, alt: "Workshop" },
    { id: 4, src: performanceImage4, alt: "Class" }
  ];

  // Classes data
  const classesData = [
    {
      id: 1,
      level: "Saturday Batch",
      title: "Kalpavrisha, Horamavu",
      description: "Conducted by Smitha Srinivasan herself. Experience traditional Kathak training with our founder and artistic director.",
      schedule: "Saturday: 10 AM - 12 PM"
    },
    {
      id: 2,
      level: "Sunday Batch",
      title: "Kalpavriksha, Horamavu Location",
      description: "Conducted by senior student Eshanya Bhat.",
      schedule: "Sunday: 11 AM - 1 PM"
    },
    {
      id: 3,
      level: "Saturday Batch",
      title: "Utsarga Academy, Electronic City",
      description: "Conducted by senior student Jaya Srinivasan.",
      schedule: "Saturday: 10 AM - 12 PM"
    },
    {
      id: 4,
      level: "Sunday Batch",
      title: "Triple S Components Pvt Ltd, Electronic City",
      description: "Conducted by Smitha Srinivasan herself. Junior and senior batches available with our founder.",
      schedule: "Sunday: 9 AM - 12 PM"
    }
  ];

  // Team data with three sections
  const founderData = {
    id: 1,
    name: "Smitha Srinivasan",
    role: "Founder & Artistic Director",
    bio: "Trained under Karnataka Kalashree Guru Nandini Mehta and Guru Murali Mohan since 1999.",
    image: founderImage
  };

  const banaswadiTeam = [
    {
      id: 2,
      name: "Eshanya Bhat",
      role: "Senior Student",
      bio: "Dedicated student with excellent technique and stage presence."
    },
    {
      id: 3,
      name: "Shreya Mechri",
      role: "Senior Student", 
      bio: "Passionate dancer specializing in traditional compositions."
    },
    {
      id: 4,
      name: "Gouri Mechri",
      role: "Senior Student",
      bio: "Talented performer with strong foundation in Kathak fundamentals."
    }
  ];

  const electronicCityTeam = [
    {
      id: 5,
      name: "Jaya Srinivasan",
      role: "Senior Student",
      bio: "Accomplished dancer with focus on abhinaya and expression."
    },
    {
      id: 6,
      name: "Sayanthan Sengupta",
      role: "Senior Student",
      bio: "Dedicated practitioner with excellent rhythmic skills."
    },
    {
      id: 7,
      name: "Shohini Ghosh",
      role: "Senior Student",
      bio: "Expressive performer with strong technical foundation."
    },
    {
      id: 8,
      name: "Sumantra Chaudhury",
      role: "Senior Student",
      bio: "Versatile dancer with passion for classical storytelling."
    },
    {
      id: 9,
      name: "Puvaneshwari",
      role: "Senior Student",
      bio: "Graceful performer with natural stage presence."
    },
    {
      id: 10,
      name: "Garima Gola",
      role: "Senior Student",
      bio: "Talented dancer with dedication to the art of Kathak."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <VideoHero />
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <Container>
          <h2 className="section-title text-center mb-5">About Us</h2>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src={founderImage} 
                alt="Smitha Srinivasan - Founder" 
                className="w-100 about-image"
              />
            </Col>
            <Col lg={6}>
              <h3 className="mb-3">Our Legacy</h3>
              <p>Founded in 2018 by Smitha Srinivasan, Thaat Kathak Academy is dedicated to preserving and promoting the classical dance form of Kathak.</p>
              <p>Smitha has been a devoted student of Karnataka Kalashree Guru Nandini Mehta and Guru Murali Mohan since 1999, forming the foundation of the academy's teaching approach—discipline, devotion, and dynamic storytelling.</p>
              <p>At Thaat, students are introduced to the rich heritage of Kathak while developing their own artistic voice. The academy offers classes for all levels, focusing on technique, abhinaya (expression), and performance skills.</p>
              <p>The Thaat Ensemble, the academy's performing wing, showcases Kathak through acclaimed performances across India, praised for elegance, precision, and emotive power.</p>
            </Col>
          </Row>

          {/* Our Team */}
          <h3 className="text-center gold-text mt-5 mb-4">Our Team</h3>
          <Row>
            {/* Founder */}
            <Col lg={4} md={4} className="mb-4">
              <Card className="custom-card h-100 text-center">
                {founderData.image && (
                  <div className="p-3">
                    <img 
                      src={performanceImage7} 
                      alt={founderData.name} 
                      className="rounded-circle mb-3"
                      style={{ width: '180px', height: '180px', objectFit: 'cover', border: '3px solid #d4af37' }}
                    />
                  </div>
                )}
                <Card.Body>
                  <Card.Title className="gold-text">{founderData.name}</Card.Title>
                  <Card.Subtitle className="mb-3">{founderData.role}</Card.Subtitle>
                  <Card.Text>{founderData.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Banaswadi Team */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card h-100 text-center">
                <div className="p-3">
                  <img 
                    src={performanceImage5} 
                    alt="Banaswadi Team" 
                    className="rounded-circle mb-3"
                    style={{ width: '180px', height: '180px', objectFit: 'cover', border: '3px solid #d4af37' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="gold-text">Banaswadi Team</Card.Title>
                  <Card.Subtitle className="mb-3">Senior Students</Card.Subtitle>
                  <Card.Text>
                    <strong>Eshanya Bhat</strong>, <strong>Shreya Mechri</strong>, <strong>Gouri Mechri</strong>
                    <br /><br />
                    Dedicated students from our Banaswadi branch, excelling in technique, expression, and performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Electronic City Team */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card h-100 text-center">
                <div className="p-3">
                  <img 
                    src={performanceImage6} 
                    alt="Electronic City Team" 
                    className="rounded-circle mb-3"
                    style={{ width: '180px', height: '180px', objectFit: 'cover', border: '3px solid #d4af37' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="gold-text">Electronic City Team</Card.Title>
                  <Card.Subtitle className="mb-3">Senior Students</Card.Subtitle>
                  <Card.Text>
                    <strong>Jaya Srinivasan</strong>, <strong>Sayanthan Sengupta</strong>, <strong>Shohini Ghosh</strong>, <strong>Sumantra Chaudhury</strong>, <strong>Puvaneshwari</strong>, <strong>Garima Gola</strong>
                    <br /><br />
                    Accomplished dancers from our Electronic City branch, showcasing excellence in classical Kathak.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Classes Section */}
      <section id="classes" className="section" style={{backgroundColor: 'rgba(20, 20, 20, 0.9)'}}>
        <Container>
          <h2 className="section-title text-center mb-5">Our Classes</h2>
          <Row>
            {classesData.map(classItem => (
              <Col md={3} className="mb-4" key={classItem.id}>
                <Card className="custom-card h-100">
                  <Card.Header className="custom-card-header text-center">{classItem.level}</Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{classItem.title}</Card.Title>
                    <Card.Text className="mb-2">
                      {classItem.description}
                    </Card.Text>
                    <div className="mt-3">
                      <p className="mb-3"><strong>Schedule:</strong> {classItem.schedule}</p>
                    </div>
                    <div className="mt-auto text-center">
                      <Button className="btn-outline-gold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        ENQUIRE NOW
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <p className="mb-4">Our classes run throughout the year with new batches starting every quarter. Contact us for the next enrollment dates.</p>
            <Button className="btn-gold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              JOIN OUR CLASSES
            </Button>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <Container>
          <h2 className="section-title text-center mb-5">Gallery</h2>
          <Row>
            {galleryImages.map(image => (
              <Col md={6} lg={3} key={image.id} className="mb-4">
                <div className="gallery-item">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button className="btn-gold">VIEW MORE IMAGES</Button>
          </div>
        </Container>
      </section>

      {/* Performances Section */}
      <section id="performances" className="section" style={{backgroundColor: 'rgba(20, 20, 20, 0.9)'}}>
        <Container>
          <h2 className="section-title text-center mb-5">Performances</h2>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="gold-text mb-4">Upcoming Shows</h3>
              {upcomingShows.map(show => (
                <div key={show.id} className="mb-4 custom-card">
                  <Row className="g-0">
                    <Col xs={3} md={2}>
                      <div className="calendar-date">
                        <div className="fs-4">{show.date.split(' ')[1]}</div>
                        <div>{show.date.split(' ')[0]}</div>
                      </div>
                    </Col>
                    <Col xs={9} md={10}>
                      <div className="show-details">
                        <h5>{show.title}</h5>
                        <p className="mb-1">{show.venue}</p>
                        <p className="mb-0">{show.time}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
              {/* <Button className="btn-outline-gold mt-2">VIEW MORE EVENTS</Button> */}
            </Col>
            <Col lg={6}>
              <h3 className="gold-text mb-4">Thaat Ensemble</h3>
              <div className="position-relative mb-3">
                <img 
                  src={show1} 
                  alt="Thaat Kathak Academy Performance" 
                  className="w-50 about-image"
                />
              </div>
              <p>The Thaat Ensemble is our professional performing wing that showcases the vibrancy of Kathak through performances across India. With choreography that bridges classical tradition and contemporary relevance, the ensemble has been praised for its elegance, precision, and emotive power.</p>
              <Button className="btn-outline-gold">BOOK A PERFORMANCE</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Container>
          <h2 className="section-title text-center mb-5">Contact Us</h2>
          <Row>
            <Col lg={5} className="mb-4 mb-lg-0">
              <h3 className="gold-text mb-4">Get In Touch</h3>
              <p className="mb-4">Interested in learning Kathak or booking a performance? Reach out to us today!</p>
              
              <div className="mb-4">
                <p className="mb-2">
                  <i className="bi bi-geo-alt gold-text me-2"></i> 
                  Bengaluru, Karnataka
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
              </div>

              <h4 className="gold-text mb-3">Connect With Us</h4>
              <div className="d-flex">
                <a href="https://instagram.com/thaat_kathak_academy" target="_blank" rel="noopener noreferrer" className="social-icon me-3 fs-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3 fs-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3 fs-3">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="custom-card p-4">
                <h3 className="gold-text mb-4">Send Us a Message</h3>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Full Name*</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Subject*</Form.Label>
                        <Form.Select required>
                          <option value="">Select a subject</option>
                          <option value="class">Class Enquiry</option>
                          <option value="performance">Performance Booking</option>
                          <option value="workshop">Workshop</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Message*</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Type your message here..." required />
                  </Form.Group>
                  <div className="text-center">
                    <Button type="submit" className="btn-gold">SEND MESSAGE</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
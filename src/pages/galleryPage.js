import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then(r => r.json())
      .then(data => setImages((data.items || []).map((g, i) => ({ ...g, id: i + 1 }))))
      .catch(() => setImages([]));
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <Container>
        <h2 className="section-title text-center mb-5">Gallery</h2>
        <Row>
          {images.map(image => (
            <Col md={6} lg={4} key={image.id} className="mb-4">
              <div className="gallery-page-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-100"
                  style={{ objectFit: 'cover', height: '300px', cursor: 'pointer' }}
                />
                {image.title && <p className="text-center mt-2 small" style={{ color: 'rgba(255,255,255,0.6)' }}>{image.title}</p>}
              </div>
            </Col>
          ))}
        </Row>
        {images.length === 0 && <p className="text-center">No images yet.</p>}
      </Container>
    </section>
  );
}

export default GalleryPage;

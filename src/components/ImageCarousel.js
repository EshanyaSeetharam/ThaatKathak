// src/components/ImageCarousel.js
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function ImageCarousel({ images, autoScrollInterval = 4000 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-carousel">
      <Container>
        <div className="carousel-container">
          <div className="carousel-image-wrapper">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="carousel-image"
            />
            
            {/* Navigation arrows */}
            <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="carousel-counter">
            <span className="gold-text">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ImageCarousel;
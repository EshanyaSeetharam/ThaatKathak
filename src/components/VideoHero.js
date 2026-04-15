// src/components/VideoHero.js
import React, { useRef, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import introVideo from '../assets/intro-video.mp4';

function VideoHero() {
  const popupVideoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);
  const [popupFading, setPopupFading] = useState(false);

  // Auto-play popup video
  useEffect(() => {
    if (!showPopup || !popupVideoRef.current) return;

    popupVideoRef.current.play().catch(() => {
      setShowPopup(false);
    });

    const video = popupVideoRef.current;
    const handleEnd = () => {
      setPopupFading(true);
      setTimeout(() => setShowPopup(false), 600);
    };

    video.addEventListener('ended', handleEnd);
    return () => video.removeEventListener('ended', handleEnd);
  }, [showPopup]);

  // Start background video looping (always plays behind hero)
  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
  }, []);

  const closePopup = () => {
    setPopupFading(true);
    setTimeout(() => setShowPopup(false), 600);
  };

  const scrollToClasses = () => {
    const section = document.getElementById('classes');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPerformances = () => {
    const section = document.getElementById('performances');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Video Popup Modal - clear, no blur */}
      {showPopup && (
        <div className={`video-modal-overlay ${popupFading ? 'fading' : ''}`} onClick={closePopup}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closePopup}>&times;</button>
            <video
              ref={popupVideoRef}
              className="video-modal-player"
              muted
              playsInline
              preload="auto"
            >
              <source src={introVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Hero Section with blurred background video */}
      <section className="video-hero" id="hero">
        <div className="video-container">
          <video
            ref={bgVideoRef}
            className="video-background"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-overlay"></div>
        <Container className="hero-content text-center">
          <h1 className="display-3 fw-bold mb-3">THAAT <span className="gold-text">KATHAK</span> ACADEMY</h1>
          <p className="hero-location mb-2">Bangalore, India</p>
          <p className="hero-tagline mb-3">Where tradition meets expression — Classical Kathak for every soul</p>
          <p className="tagline"><span>GRACE</span> | <span>RHYTHM</span> | <span>EXPRESSION</span></p>
          <div className="mt-4">
            <Button onClick={scrollToClasses} className="btn-gold me-3">JOIN CLASSES</Button>
            <Button onClick={scrollToPerformances} className="btn-outline-gold">UPCOMING SHOWS</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default VideoHero;

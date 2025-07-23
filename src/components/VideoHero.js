// src/components/VideoHero.js
import React, { useRef, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import introVideo from '../assets/videos/intro-video.mp4'; // Import your intro video

function VideoHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Auto-play was prevented
        console.log("Video autoplay prevented:", error);
      });
    }
    
    // Add event listener for when video ends to loop it
    const currentVideo = videoRef.current;
    const handleVideoEnd = () => {
      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(e => console.log(e));
      }
    };
    
    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnd);
    }
    
    // Clean up
    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const scrollToClasses = () => {
    const classesSection = document.getElementById('classes');
    if (classesSection) {
      classesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPerformances = () => {
    const performancesSection = document.getElementById('performances');
    if (performancesSection) {
      performancesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="video-hero" id="hero">
      <div className="video-container">
        <video 
          ref={videoRef}
          className="video-background"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-overlay"></div>
      <Container className="hero-content text-center">
        <h1 className="display-3 fw-bold mb-3">THAAT <span className="gold-text">KATHAK</span> ACADEMY</h1>
        <p className="tagline"><span>GRACE</span> | <span>RHYTHM</span> | <span>EXPRESSION</span></p>
        <div className="mt-4">
          <Button onClick={scrollToClasses} className="btn-gold me-3">JOIN CLASSES</Button>
          <Button onClick={scrollToPerformances} className="btn-outline-gold">UPCOMING SHOWS</Button>
        </div>
      </Container>
    </section>
  );
}

export default VideoHero;


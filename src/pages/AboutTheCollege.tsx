// src/pages/About.tsx
import React from 'react';
import './styles.css';
import collegeImage from './images/psg1.jpg';

export default function About() {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${collegeImage})`,
      }}
    >
      <div className="about-overlay"></div>
      <div className="about-content">
        <div className="about-left">
          <div className="about-heading-line"></div>
          <h2 className="about-heading">ABOUT THE COLLEGE</h2>
        </div>
        <div className="about-right">
          <p className="about-text">
            Our college has a rich history of academic excellence, providing
            students with a well-rounded education. We focus on holistic
            development, encouraging our students to pursue both academic and
            extracurricular activities. Our faculty comprises experienced
            educators and industry professionals who are dedicated to guiding
            students toward success.
          </p>
        </div>
      </div>
    </div>
  );
}

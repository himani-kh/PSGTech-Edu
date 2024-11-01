// src/pages/VisionMission.tsx
import React from 'react';
import './styles.css';

export default function VisionMission() {
  return (
    <div className="vision-mission-container">
      <div className="vision-mission-overlay"></div>
      <div className="vision-mission-content">
        <div className="section-content">
          <div className="section-content-text">
            <p>
              PSG College of Technology aspires to be recognized as one of the leaders in engineering education, research and application of knowledge to benefit society.
            </p>
            <p style={{ marginBottom: '10rem' }}></p>
            <p>
              Our mission as an institution is to :
              Provide world-class Engineering Education, foster Research and Development, evolve Innovative applications of Technology, encourage Entrepreneurship, ultimately mould young men and women capable of assuming Leadership of the society for the betterment of the country.            </p>
          </div>
        </div>
        <div className="section-heading-container">
          <div className="heading-line"></div>
          <div className="section-heading">VISION</div>
          <div className="heading-spacing"></div>
          <div className="heading-line"></div>
          <div className="section-heading">MISSION</div>
        </div>
      </div>
    </div>
  );
}

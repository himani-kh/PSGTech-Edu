import React from 'react';
import './BottomBar.css'; 
import CollegeMenu from "./BottomBarComponents/CollegeMenu";
import AcademicsMenu from "./BottomBarComponents/AcademicsMenu";
import AwardsMenu from "./BottomBarComponents/AwardsMenu";

const BottomBar: React.FC = () => {
  return (
    <div className="bottom-bar">
      {/* Left Section - Remains in place */}
      <div className="bottom-bar-section" style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
        <CollegeMenu />
        <AcademicsMenu />
        <p>Exams</p>
        <p>COE</p>
      </div>

      {/* Right Section - Moves to the right */}
      <div className="second-section">
        <p>NAAC</p>
        <p>Research</p>
        <p>Industry</p>
        <p>NIRF & ARIIA</p>
        <AwardsMenu />
      </div>
    </div>
  );
};

export default BottomBar;

import React from "react";
import News from "./components/News";
import Search from "./components/Search";
import SocialMedia from "./components/SocialMedia";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <News />
      <Search />
      <SocialMedia />
      <button className="header-button">
        e-campus
      </button>
    </div>
  );
};

export default Header;
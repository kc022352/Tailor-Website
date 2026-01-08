import React from 'react';
import Banner from "../images/images1.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>Tailor Website</h1>
        <p>Best Tailor In India</p>
        <a href="https://wa.me/917738195355?text=Hello%20I%20want%20tailoring%20service" target="_blank" rel="noopener noreferrer">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/intro.css';
import IntroVideo from "../assets/intro.mp4";

const Intro = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/home');
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  // Calculate dynamic font size based on loading progress
  const fontSize = `${0.6 + loadingProgress / 40}rem`; // Example: Starting from 2.5rem and increasing

  return (
    <div className="intro-container">
      <video autoPlay loop muted className="background-video">
        <source src={IntroVideo} type="video/mp4" />
      </video>
      <div className="loading-content">
        <h1 style={{ fontSize }}>Future</h1>
        <h1 style={{ fontSize }}>Software Engineer</h1>
        <h1 style={{ fontSize }}>Loading...</h1>
        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

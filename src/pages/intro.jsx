import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/intro.css';
import IntroVideo from "../assets/intro.mp4";

const Intro = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [fontSize, setFontSize] = useState("2.5rem"); // Default font size
  const navigate = useNavigate();

  useEffect(() => {
    const updateFontSize = () => {
      const baseFontSize = 0.6 + loadingProgress / 70;

      // Set font size based on screen width
      if (window.innerWidth <= 321) {
        setFontSize(`${Math.min(1.4, baseFontSize)}rem`);
      } else if (window.innerWidth <= 376) {
        setFontSize(`${Math.min(1.6, baseFontSize)}rem`);
      } else if (window.innerWidth <= 426) {
        setFontSize(`${Math.min(1.4, baseFontSize)}rem`);
      } else if (window.innerWidth <= 769) {
        setFontSize(`${Math.min(2.2, baseFontSize)}rem`);
      } else {
        setFontSize(`${baseFontSize}rem`);
      }
    };

    // Update font size on component mount and loading progress change
    updateFontSize();

    // Update font size when window is resized
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [loadingProgress]);

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

  return (
    <div className="intro-container">
      <video autoPlay loop muted className="background-video">
        <source src={IntroVideo} type="video/mp4" />
      </video>
      <div className="loading-content">
        <h1 style={{ fontSize }} className='intro-heading'>Future</h1>
        <h1 style={{ fontSize }} className='intro-heading'>Software Engineer</h1>
        <h1 style={{ fontSize }} className='intro-heading'>Loading...</h1>
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

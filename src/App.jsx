import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import Intro from './pages/intro';
import Dashboard from './pages/dashboard';
import music from './assets/dreams.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(music));

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    
    // Cleanup
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.currentTime = 0; // Reset the audio
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<MainPage toggleMusic={toggleMusic} />} />
        <Route path="/home/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

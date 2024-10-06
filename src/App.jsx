import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import Intro from './pages/intro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={
          <>
            <MainPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

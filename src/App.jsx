import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import Intro from './pages/intro';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={ <MainPage /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;

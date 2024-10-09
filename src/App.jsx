import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import Intro from './pages/intro';
import Dashboard from './pages/dashboard';
import ContactPage from './components/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={ <MainPage /> } />
        <Route path="/home/dashboard" element={ <Dashboard /> } />
        <Route path="/home/contact" element={ <ContactPage /> } />
      </Routes>
    </Router>
  );
}

export default App;

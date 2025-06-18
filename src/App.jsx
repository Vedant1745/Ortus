import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, AboutUs, Services, Contact, NotFound} from './pages/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


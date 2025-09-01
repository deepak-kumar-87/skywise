// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css'
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/inc/Footer';
import Drishti from './components/pages/Drishti';
import Srishti from './components/pages/Srishti';
import Service from './components/pages/Service';
import Technology from './components/pages/Technology';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drishti" element={<Drishti />} />
              <Route path="/srishti" element={<Srishti />} />
              <Route path="/service" element={<Service />} />
            </Routes>
          <Footer />
      </div>    
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import "./designs/about.css";
import "./designs/main.css";
import "./designs/home.css";
import "./designs/nav.css";
import "./designs/bg.css";
import "./designs/arrow.css";
import "./designs/proj.css";
import "./designs/gal.css";
import "./designs/cont.css";
import "./designs/reponsive.css";
import LoadingScreen from './components/Loading';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Footer from "./components/Footer";
import BackToTopButton from './components/Toparrow';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const getBackgroundClass = (path) => {
    switch (path) {
      case '/about':
        return 'background-about';
      case '/projects':
        return 'background-projects';
      case '/gallery':
        return 'background-gallery';
      case '/contacts':
        return 'background-contacts';
      default:
        return 'background-home';
    }
  };

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <div className={`main-container ${getBackgroundClass(location.pathname)}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* Redirect unmatched paths to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
          <BackToTopButton />
        </>
      )}
    </>
  );
}

export default App;

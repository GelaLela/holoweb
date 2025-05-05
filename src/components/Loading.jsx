import React, { useState, useEffect } from 'react';
import loading from "../assets/gura.gif"
import '../designs/load.css';

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={loading} alt="Loading" className="loading-image" />
        <p className='loadtitle'>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

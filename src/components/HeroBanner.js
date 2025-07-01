import React, { useEffect, useState } from "react";
import "./HeroBanner.css";

const HeroBanner = ({ featuredMovies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredMovies]);

  const currentMovie = featuredMovies[currentIndex];
  if (!currentMovie) return null;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${currentMovie.poster})`,
      }}
    >
      <div className="content">
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.description}</p>
        <button>▶ Play</button>
      </div>
    </div>
  );
};

export default HeroBanner;

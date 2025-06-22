import React from "react";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ title, movies, onCardClick }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-row hide-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;

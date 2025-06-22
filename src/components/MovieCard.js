import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="card-overlay">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

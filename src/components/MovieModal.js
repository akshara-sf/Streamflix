import React from "react";
import "./MovieModal.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <img src={movie.poster} alt={movie.title} className="modal-poster" />
        <div className="modal-details">
          <h2>{movie.title}</h2>
          <p className="genre-type">
            <span>{movie.genre}</span> • <span>{movie.type}</span>
          </p>
          <p className="description">{movie.description}</p>
          <p className="rating">⭐ {movie.rating}/10</p>
          <button className="play-btn">▶ Watch Now</button>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default MovieModal;

import React, { useState, useEffect } from "react";
import "./index.css";
import moviesData from "./data/movies.json";
import Navbar from "./components/Navbar";
import MovieCarousel from "./components/MovieCarousel";
import MovieModal from "./components/MovieModal";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import '@fortawesome/fontawesome-free/css/all.min.css';
const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPreview, setShowSearchPreview] = useState(false);

  useEffect(() => {
    const uniqueGenres = [...new Set(moviesData.map((movie) => movie.genre))];
    setGenres(uniqueGenres);
  }, []);

  const openModal = (movie) => setSelectedMovie(movie);
  const closeModal = () => setSelectedMovie(null);
const getRandomMovies = (count) => {
  const shuffled = [...moviesData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const [featuredMovies, setFeaturedMovies] = useState(getRandomMovies(4));

  return (
    <div>
      <Navbar
        onSearch={(value) => {
          setSearchQuery(value);
          setShowSearchPreview(value.trim().length > 0);
        }}
        onTypeChange={setSelectedType}
      />

      <HeroBanner featuredMovies={featuredMovies} />

      {/* Live Search */}
      {showSearchPreview && (
        <div className="search-preview">
          {moviesData
            .filter((m) =>
              m.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter((m) => selectedType === "All" || m.type === selectedType)
            .slice(0, 5)
            .map((movie) => (
              <div
                key={movie.id}
                className="preview-card"
                onClick={() => {
                  openModal(movie);
                  setShowSearchPreview(false);
                }}
              >
                <img src={movie.poster} alt={movie.title} />
                <div className="info">
                  <h4>{movie.title}</h4>
                  <p>{movie.description.slice(0, 60)}...</p>
                </div>
              </div>
            ))}

          {moviesData.filter((m) =>
            m.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 && <p className="no-result">No results found.</p>}
        </div>
      )}

      {/* Genre Filter */}
      <div className="genre-filter-wrapper">
        <div className="genre-filter">
  <button
    className={selectedGenre === "All" ? "active" : ""}
    onClick={() => setSelectedGenre("All")}
  >
    All
  </button>

  {genres.map((genre) => (
    <button
      key={genre}
      className={selectedGenre === genre ? "active" : ""}
      onClick={() => setSelectedGenre(genre)}
    >
      {genre}
    </button>
  ))}
</div> </div>

      {/* Carousels */}
      <div className="carousel">
        {genres
          .filter((genre) => selectedGenre === "All" || genre === selectedGenre)
          .map((genre) => {
            const genreMovies = moviesData
              .filter((m) => m.genre === genre)
              .filter((m) =>
                m.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .filter((m) => selectedType === "All" || m.type === selectedType);

            if (genreMovies.length === 0) return null;

            return (
              <MovieCarousel
                key={genre}
                title={genre}
                movies={genreMovies}
                onCardClick={openModal}
              />
            );
          })}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default App;

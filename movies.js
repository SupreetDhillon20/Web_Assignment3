// pages/movies.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'], year: 2010 },
    { id: 2, title: 'Interstellar', actors: ['Matthew McConaughey', 'Anne Hathaway'], year: 2014 },
  ]);
  const [newMovie, setNewMovie] = useState({ title: '', actors: '', year: '' });

  const handleAddMovie = () => {
    const actorsArray = newMovie.actors.split(',').map(actor => actor.trim());
    setMovies([...movies, { ...newMovie, actors: actorsArray, id: movies.length + 1 }]);
    setNewMovie({ title: '', actors: '', year: '' });
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Movies List</h1>
        <ul className={styles.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <h2>{movie.title} ({movie.year})</h2>
              <p>Actors: {movie.actors.join(', ')}</p>
              <button className={styles.deleteButton} onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className={styles.addMovie}>
          <h2>Add a New Movie</h2>
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Actors (comma separated)"
            value={newMovie.actors}
            onChange={(e) => setNewMovie({ ...newMovie, actors: e.target.value })}
          />
          <input
            type="text"
            placeholder="Release Year"
            value={newMovie.year}
            onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
          />
          <button className={styles.addButton} onClick={handleAddMovie}>Add Movie</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Movies;

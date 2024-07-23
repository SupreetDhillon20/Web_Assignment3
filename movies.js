// pages/movies.js

'use client';

import { useState } from 'react';
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

  const handleEditMovie = (id) => {
    const updatedMovies = movies.map(movie => (
      movie.id === id ? { ...movie, isEditing: true } : movie
    ));
    setMovies(updatedMovies);
  };

  const handleSaveMovie = (id) => {
    const updatedMovies = movies.map(movie => (
      movie.id === id ? { ...movie, isEditing: false } : movie
    ));
    setMovies(updatedMovies);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Movies List</h1>
        <ul className={styles.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              {movie.isEditing ? (
                <>
                  <input
                    type="text"
                    value={movie.title}
                    onChange={(e) => setMovies(movies.map(m => m.id === movie.id ? { ...m, title: e.target.value } : m))}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    value={movie.actors.join(', ')}
                    onChange={(e) => setMovies(movies.map(m => m.id === movie.id ? { ...m, actors: e.target.value.split(',').map(actor => actor.trim()) } : m))}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    value={movie.year}
                    onChange={(e) => setMovies(movies.map(m => m.id === movie.id ? { ...m, year: e.target.value } : m))}
                    className={styles.input}
                  />
                  <button onClick={() => handleSaveMovie(movie.id)}>Save</button>
                </>
              ) : (
                <>
                  <h2>{movie.title} ({movie.year})</h2>
                  <p>Actors: {movie.actors.join(', ')}</p>
                  <button onClick={() => handleEditMovie(movie.id)}>Edit</button>
                  <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                </>
              )}
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
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Actors (comma separated)"
            value={newMovie.actors}
            onChange={(e) => setNewMovie({ ...newMovie, actors: e.target.value })}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Release Year"
            value={newMovie.year}
            onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
            className={styles.input}
          />
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      </main>
    </div>
  );
};

export default Movies;

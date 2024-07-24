'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movies List</h1>
      <ul className="grid grid-cols-2 gap-4">
        {movies.map(movie => (
          <li key={movie.id} className="border rounded-md p-4 shadow-lg hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{movie.title} ({movie.year})</h2>
            <p className="text-gray-700">Actors: {movie.actors.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;




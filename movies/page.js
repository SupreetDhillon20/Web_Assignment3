'use client'; // Indicates that this component should be rendered on the client side

import { useEffect, useState } from 'react'; // Import React hooks for managing state and side effects
import axios from 'axios'; // Import axios for making HTTP requests

/**
 * MoviesList component that fetches and displays a list of movies.
 * @returns {JSX.Element} - The rendered movies list component.
 */

const MoviesList = () => {
   // State for storing the list of movies
  const [movies, setMovies] = useState([]);
// Fetch movies from the API when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  /**
   * Fetches the list of movies from the API and updates the state.
   */
  
  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data); // Update the state with the fetched movies
    } catch (error) {
      console.error('Error fetching movies:', error); // Log any errors that occur
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




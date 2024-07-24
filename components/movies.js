'use client'; // Indicates that this component should be rendered on the client side

import { useState, useEffect } from 'react'; // Import React hooks for managing state and side effects
import axios from 'axios'; // Import axios for making HTTP requests

/**
 * Movies component that displays and manages a list of movies.
 * @returns {JSX.Element} - The rendered movies component with functionality to add, edit, and delete movies.
 */

const Movies = () => {
  // State for storing the list of movies
  const [movies, setMovies] = useState([]);
  // State for storing the new movie form data
  const [newMovie, setNewMovie] = useState({ title: '', actors: '', year: '' });
  // State for managing the ID of the movie being edited
  const [editingMovieId, setEditingMovieId] = useState(null);
  // State for storing the movie data while editing
  const [editingMovie, setEditingMovie] = useState({ title: '', actors: '', year: '' });

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);
  
  /**
   * Fetches the list of movies from the API.
   */

  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data);// Update the state with the fetched movies
    } catch (error) {
      console.error('Error fetching movies:', error); // Log any errors that occur
    }
  };

  /**
   * Handles the addition of a new movie.
   */
  
  const handleAddMovie = async () => {
    try {
      const response = await axios.post('/api/movies', {
        title: newMovie.title,
        year: newMovie.year,
        actors: newMovie.actors.split(',').map(actor => actor.trim()),
      });
      fetchMovies(); // Refresh the movie list  // Refresh the movie list
      setNewMovie({ title: '', actors: '', year: '' }); // Reset the form 
    } catch (error) {
      console.error('Error adding movie:', error); // Log any errors that occur
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`/api/movies`, { data: { id } });
      fetchMovies(); // Refresh the movie list
    } catch (error) {
      console.error('Error deleting movie:', error); // Log any errors that occur
    }
  };

  /**
   * Handles the deletion of a movie by its ID.
   * @param {string} id - The ID of the movie to be deleted.
   */
  
  const handleEditMovie = (movie) => {
    setEditingMovieId(movie.id);
    setEditingMovie({ title: movie.title, actors: movie.actors.join(', '), year: movie.year });
  };

    /**
   * Saves the edited movie data.
   * @param {string} id - The ID of the movie to be updated.
   */
  
  const handleSaveMovie = async (id) => {
    try {
      const response = await axios.patch(`/api/movies`, {
        id,
        title: editingMovie.title,
        year: editingMovie.year,
        actors: editingMovie.actors.split(',').map(actor => actor.trim()),
      });
      fetchMovies(); // Refresh the movie list
      setEditingMovieId(null); // Exit edit mode
      setEditingMovie({ title: '', actors: '', year: '' }); // Reset the editing form
    } catch (error) {
      console.error('Error saving movie:', error); // Log any errors that occur
    }
  };

  /**
   * Handles changes in the new movie form fields.
   * @param {Object} e - The event object containing the form data.
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingMovie((prevState) => ({ ...prevState, [name]: value }));
  };

  /**
   * Handles changes in the editing movie form fields.
   * @param {Object} e - The event object containing the form data.
   */
  
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Movies</h1>
        <ul className="w-full max-w-4xl space-y-4">
          {movies.length === 0 ? (
            <p>No movies available.</p>
          ) : (
            movies.map((movie) => (
              <li key={movie.id} className="border rounded-md p-4 shadow-lg">
                {editingMovieId === movie.id ? (
                  <div>
                    <input
                      type="text"
                      name="title"
                      value={editingMovie.title}
                      onChange={handleEditChange}
                      className="border p-2 rounded mb-2 w-full"
                    />
                    <input
                      type="text"
                      name="actors"
                      value={editingMovie.actors}
                      onChange={handleEditChange}
                      className="border p-2 rounded mb-2 w-full"
                    />
                    <input
                      type="text"
                      name="year"
                      value={editingMovie.year}
                      onChange={handleEditChange}
                      className="border p-2 rounded mb-2 w-full"
                    />
                    <button
                      onClick={() => handleSaveMovie(movie.id)}
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold">
                      {movie.title} ({movie.year})
                    </h2>
                    <p className="text-gray-700">Actors: {movie.actors.join(', ')}</p>
                    <div className="mt-2">
                      <button
                        onClick={() => handleEditMovie(movie)}
                        className="bg-yellow-400 text-white p-2 rounded mr-2 hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMovie(movie.id)}
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        <div className="mt-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Add a New Movie</h2>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Actors (comma separated)"
            name="actors"
            value={newMovie.actors}
            onChange={handleChange}
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Release Year"
            name="year"
            value={newMovie.year}
            onChange={handleChange}
            className="border p-2 rounded mb-2 w-full"
          />
          <button
            onClick={handleAddMovie}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Movie
          </button>
        </div>
      </main>
    </div>
  );
};

export default Movies;

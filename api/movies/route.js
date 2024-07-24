
import prisma from '../../../lib/prismadb'; // Import the Prisma client instance
import { NextResponse } from 'next/server'; // Import NextResponse for handling responses

/**
 * Handle POST requests to create a new movie.
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - The response containing the newly created movie data or an error message.
 */

export const POST = async (request) => {
  try {
    // Parse the JSON body of the request
    const { title, year, actors } = await request.json();
    // Create a new movie entry in the database
    const newMovie = await prisma.movie.create({
      data: {
        title,
        year: parseInt(year, 10), // Convert the year to an integer
        actors,
      },
    });
    // Return the newly created movie data
    return NextResponse.json(newMovie);
  } catch (error) {
    // Return a 500 error if there is an issue with creating the movie
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

/**
 * Handle GET requests to retrieve all movies.
 * @returns {NextResponse} - The response containing a list of all movies or an error message.
 */

export const GET = async () => {
  try {
    // Retrieve all movie entries from the database
    const movies = await prisma.movie.findMany();
    // Return the list of movies
    return NextResponse.json(movies);
  } catch (error) {
    // Return a 500 error if there is an issue with retrieving the movies
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

/**
 * Handle PATCH requests to update an existing movie.
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - The response containing the updated movie data or an error message.
 */

export const PATCH = async (request) => {
  try {
    // Parse the JSON body of the request
    const { id, title, year, actors } = await request.json();
    // Update the movie entry in the database with new data
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: { title, year: parseInt(year, 10), actors }, // Convert the year to an integer
    });
    // Return the newly created movie data
    return NextResponse.json(updatedMovie);
  } catch (error) {
    // Return a 500 error if there is an issue with creating the movie
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

/**
 * Handle PATCH requests to update an existing movie.
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - The response containing the updated movie data or an error message.
 */

export const DELETE = async (request) => {
  try {
   // Parse the JSON body of the request to get the movie ID
    const { id } = await request.json();
  // Delete the movie entry from the database
    await prisma.movie.delete({ where: { id } });
  // Return a success message
    return NextResponse.json({ message: 'Movie deleted successfully' });
  } catch (error) {
  // Return a 500 error if there is an issue with deleting the movie
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};


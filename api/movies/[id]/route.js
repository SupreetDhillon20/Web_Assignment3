import prisma from '../../../../lib/prismadb'; // Import the Prisma client instance
import { NextResponse } from 'next/server'; // Import NextResponse for handling responses

/**
 * Handle GET requests to retrieve a specific movie by its ID.
 * @param {Request} request - The incoming request object.
 * @param {Object} params - The parameters from the request, including the movie ID.
 * @returns {NextResponse} - The response containing the movie data or an error message.
 */

export const GET = async (request, { params }) => {
  const { id } = params; // Extract movie ID from params
  try {
      // Find a movie by its unique ID
    const movie = await prisma.movie.findUnique({ where: { id } });
    if (!movie) {
        // Return a 404 error if the movie is not found
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }
     // Return the movie data
    return NextResponse.json(movie);
  } catch (error) {
    // Return a 500 error if there is an issue with the request
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

/**
 * Handle PATCH requests to update a specific movie's data.
 * @param {Request} request - The incoming request object.
 * @param {Object} params - The parameters from the request, including the movie ID.
 * @returns {NextResponse} - The response containing the updated movie data or an error message.
 */

export const PATCH = async (request, { params }) => {
  const { id } = params; // Extract movie ID from params
  const body = await request.json(); // Parse the JSON body of the request
  try {
    // Update the movie with new data
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: body,
    });
    // Return the updated movie data
    return NextResponse.json(updatedMovie);
  } catch (error) {
    // Return a 500 error if there is an issue with the update
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

/**
 * Handle DELETE requests to remove a specific movie by its ID.
 * @param {Request} request - The incoming request object.
 * @param {Object} params - The parameters from the request, including the movie ID.
 * @returns {NextResponse} - The response indicating successful deletion or an error message.
 */

export const DELETE = async (request, { params }) => {
  const { id } = params; // Extract movie ID from params
  try {
     // Delete the movie by its ID
    await prisma.movie.delete({ where: { id } });
      // Return a success message
    return NextResponse.json({ message: 'Movie deleted' });
  } catch (error) {
     // Return a 500 error if there is an issue with the deletion
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

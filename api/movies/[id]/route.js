import prisma from '../../../../lib/prismadb'; 
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const movie = await prisma.movie.findUnique({ where: { id } });
    if (!movie) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { id } = params;
  const body = await request.json();
  try {
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updatedMovie);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await prisma.movie.delete({ where: { id } });
    return NextResponse.json({ message: 'Movie deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

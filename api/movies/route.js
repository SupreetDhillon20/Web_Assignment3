
import prisma from '../../../lib/prismadb'; 
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const { title, year, actors } = await request.json();
    const newMovie = await prisma.movie.create({
      data: {
        title,
        year: parseInt(year, 10),
        actors,
      },
    });
    return NextResponse.json(newMovie);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const PATCH = async (request) => {
  try {
    const { id, title, year, actors } = await request.json();
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data: { title, year: parseInt(year, 10), actors },
    });
    return NextResponse.json(updatedMovie);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    await prisma.movie.delete({ where: { id } });
    return NextResponse.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};


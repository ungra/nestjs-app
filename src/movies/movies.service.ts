import { Injectable, NotFoundException } from '@nestjs/common';
import Movie from './entities/movie.entities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  create(movieData): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return true;
  }
  remove(id: string): boolean {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
  update(id: string, updateData): boolean {
    const movie = this.getMovie(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
    return true;
  }
}

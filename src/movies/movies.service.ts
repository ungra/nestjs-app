import { Injectable } from '@nestjs/common';
import Movie from './entities/movie.entities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(movieData): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return true;
  }
  remove(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}

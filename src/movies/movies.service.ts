import { Injectable, NotFoundException } from '@nestjs/common';
import Movie from './entities/movie.entities';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
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
  remove(id: number): boolean {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }
  update(id: number, updateData: UpdateMovieDto): boolean {
    const movie = this.getMovie(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
    return true;
  }
}

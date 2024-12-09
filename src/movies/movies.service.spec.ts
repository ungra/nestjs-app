import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import exp from 'constants';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getMovie', () => {
    it('shoud return a movie', () => {
      service.create({
        title: 'Test',
        year: 1999,
        genres: ['abc'],
      });
      const movie = service.getMovie(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getMovie(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test',
        year: 1999,
        genres: ['abc'],
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });
  describe('delete', () => {
    it('should delete a movie', () => {
      service.create({
        title: 'Test',
        year: 1999,
        genres: ['abc'],
      });
      const beforeDelete = service.getAll().length;
      service.remove(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should throw 404 error', () => {
      try {
        service.remove(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Test',
        year: 1999,
        genres: ['abc'],
      });
      service.update(1, {
        title: 'Updated Test',
      });
      const movie = service.getMovie(1);
      expect(movie.title).toEqual('Updated Test');
    });
    it('should throw 404 error', () => {
      try {
        service.update(999, {});
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

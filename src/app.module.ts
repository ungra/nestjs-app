import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  // router in express
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}

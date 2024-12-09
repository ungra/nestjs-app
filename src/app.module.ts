import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  // router in express
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

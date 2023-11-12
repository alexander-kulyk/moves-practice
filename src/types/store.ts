import { IMovieDetailsState, IMoviesState } from './interface';

export interface IStore {
  trendingMovies: IMoviesState;
  movieDetails: IMovieDetailsState;
  starWarsMovies: IMoviesState;
}

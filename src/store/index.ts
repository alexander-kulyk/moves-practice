import { configureStore } from '@reduxjs/toolkit';
import { movieDetailsReducer } from './movieDetails';
import { trendingMoviesReducer } from './trendingMovies';
import { starWarsMoviesReducer } from './starWarsMovies';

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    movieDetails: movieDetailsReducer,
    starWarsMovies: starWarsMoviesReducer,
  },
});

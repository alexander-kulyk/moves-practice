import { IMoviesResponse } from '../../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { movies } from '../../api/movies';

export const fetchStarWarsMovies = createAsyncThunk(
  'starWarsMovies/fetchStarWarsMovies',
  async () => {
    const response: IMoviesResponse = (await movies.starWarsMovies()).data;
    return response.results;
  }
);

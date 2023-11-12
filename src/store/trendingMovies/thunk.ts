import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { IMovie, IMoviesResponse } from '../../types';
import { movies } from '../../api/movies';

export const fetchTrendingMovies: AsyncThunk<IMovie[], void, {}> =
  createAsyncThunk('trendingMovies/fetchMovies', async () => {
    const response: IMoviesResponse = (await movies.trendingMovies()).data;
    return response.results;
  });

import { createAsyncThunk } from '@reduxjs/toolkit';
import { movies } from '../../api/movies';

export const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id: number) => {
    const response = await movies.movieDetails(id);
    console.log('response.data', response.data);
    return [response.data];
  }
);

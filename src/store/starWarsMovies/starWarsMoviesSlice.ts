import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie, IMoviesState } from '../../types';
import { fetchStarWarsMovies } from './thunks';

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  successes: false,
  error: null,
};

const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStarWarsMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchStarWarsMovies.fulfilled,
        (state, action: PayloadAction<IMovie[]>) => {
          state.isLoading = false;
          state.successes = true;
          state.movies = action.payload;
        }
      )
      .addCase(fetchStarWarsMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.successes = false;
        /* @ts-ignore */
        state.error = action.error.message;
      });
  },
});

export default trendingMoviesSlice.reducer;

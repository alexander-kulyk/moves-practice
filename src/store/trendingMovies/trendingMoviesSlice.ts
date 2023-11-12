import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoviesState, IMovie } from '../../types';
import { fetchTrendingMovies } from './thunk';

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
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchTrendingMovies.fulfilled,
        (state, action: PayloadAction<IMovie[]>) => {
          state.isLoading = false;
          state.successes = true;
          state.movies = action.payload;
        }
      )
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.successes = false;
        /* @ts-ignore */
        state.error = action.error.message;
      });
  },
});

export default trendingMoviesSlice.reducer;

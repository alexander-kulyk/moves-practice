import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovieDetails } from './thunks';
import { IMovieDetails, IMovieDetailsState } from '../../types';

const initialState: IMovieDetailsState = {
  details: [],
  isLoading: false,
  successes: false,
  error: null,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<IMovieDetails[]>) => {
          state.isLoading = false;
          state.successes = true;
          state.details = action.payload;
        }
      )
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.successes = false;
        /* @ts-ignore */
        state.error = action.error.message;
      });
  },
});

export default movieDetailsSlice.reducer;

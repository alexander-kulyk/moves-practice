/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { IStore } from '../../types/store';

const getStore = (store: IStore) => store.trendingMovies;

const getData = createSelector(getStore, (data) => data);

const checkIsLoading = createSelector(getData, (data) => data.isLoading);

const checkIsSucceed = createSelector(getData, (data) => data.successes);

const checkIsError = createSelector(getData, (data) => data.error);

const getTrendingMoviesList = createSelector(getData, (data) => data.movies);

export default {
  getTrendingMoviesList,
  checkIsLoading,
  checkIsSucceed,
  checkIsError,
};

/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { IStore } from '../../types/store';

const getStore = (store: IStore) => store.movieDetails;

const getData = createSelector(getStore, (data) => data);

const checkIsLoading = createSelector(getData, (data) => data.isLoading);

const checkIsSucceed = createSelector(getData, (data) => data.successes);

const checkIsError = createSelector(getData, (data) => data.error);

const getMovieDetails = createSelector(getData, (data) => data.details);

export default {
  getMovieDetails,
  checkIsLoading,
  checkIsSucceed,
  checkIsError,
};

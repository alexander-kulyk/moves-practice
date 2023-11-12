/* eslint-disable react-hooks/exhaustive-deps */
//core
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import { Modal, MoviesList, Loader } from '../../components';
//other
import { useMovieDetails } from '../../hooks';
import { movieDetailSelectors } from '../../store/movieDetails';
import { trendingMoviesSelectors } from '../../store/trendingMovies';
import { fetchTrendingMovies } from '../../store/trendingMovies/thunk';

export const TrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector(
    trendingMoviesSelectors.getTrendingMoviesList
  );
  const isLoadingTrendingMovies = useSelector(
    trendingMoviesSelectors.checkIsLoading
  );
  const isLoadingMovieDetails = useSelector(
    movieDetailSelectors.checkIsLoading
  );
  const isSucceed = useSelector(trendingMoviesSelectors.checkIsSucceed);

  const { handleClickPoster, isOpenModal, setIsOpenModal } = useMovieDetails();

  const isLoading = isLoadingTrendingMovies || isLoadingMovieDetails;

  React.useEffect(() => {
    /* @ts-ignore */
    dispatch(fetchTrendingMovies());
  }, []);

  return (
    <>
      {isSucceed && (
        <MoviesList
          handleClickPoster={handleClickPoster}
          moviesList={trendingMovies}
        />
      )}
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <Loader isLoading={isLoading} />
    </>
  );
};

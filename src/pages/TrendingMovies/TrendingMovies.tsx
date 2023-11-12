//core
import { useSelector } from 'react-redux';
// components
import { Modal, MoviesList, Loader } from '../../components';
//other
import { useMovieDetails } from '../../hooks';
import { trendingMoviesSelectors } from '../../store/trendingMovies';
import { movieDetailSelectors } from '../../store/movieDetails';

export const TrendingMovies = () => {
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

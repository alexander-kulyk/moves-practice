//core
import { useDispatch, useSelector } from 'react-redux';
// components
import { Modal, MoviesList, Loader } from '../../components';
//other
import { useMovieDetails } from '../../hooks';
import { movieDetailSelectors } from '../../store/movieDetails';
import { starWarsMoviesSelectors } from '../../store/starWarsMovies';
import { fetchTrendingMovies } from '../../store/trendingMovies/thunk';

export const StarWars = () => {
  const dispatch = useDispatch();
  const starWarsMovies = useSelector(
    starWarsMoviesSelectors.getStarWarsMoviesList
  );

  const isLoadingStarWarsMovies = useSelector(
    starWarsMoviesSelectors.checkIsLoading
  );
  const isLoadingMovieDetails = useSelector(
    movieDetailSelectors.checkIsLoading
  );
  const isSucceed = useSelector(starWarsMoviesSelectors.checkIsSucceed);

  const { handleClickPoster, isOpenModal, setIsOpenModal } = useMovieDetails();

  const isLoading = isLoadingStarWarsMovies || isLoadingMovieDetails;

  const handleClickButton = () => {
    /* @ts-ignore */
    dispatch(fetchTrendingMovies());
  };

  return (
    <>
      <button onClick={handleClickButton}>next page</button>
      {isSucceed && (
        <MoviesList
          handleClickPoster={handleClickPoster}
          moviesList={starWarsMovies}
        />
      )}
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <Loader isLoading={isLoading} />
    </>
  );
};

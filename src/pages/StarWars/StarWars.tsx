//core
import { useSelector } from 'react-redux';
// components
import { Modal, MoviesList, Loader } from '../../components';
//other
import { useMovieDetails } from '../../hooks';
import { movieDetailSelectors } from '../../store/movieDetails';
import { starWarsMoviesSelectors } from '../../store/starWarsMovies';

export const StarWars = () => {
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

  return (
    <>
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

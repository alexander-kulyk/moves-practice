//core
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//other
import { fetchMovieDetails } from '../store/movieDetails/thunks';

export const useMovieDetails = (): {
  isOpenModal: boolean;
  handleClickPoster: (id: number) => void;
  setIsOpenModal: (props: boolean) => void;
} => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleClickPoster = async (id: number) => {
    /* @ts-ignore */
    await dispatch(fetchMovieDetails(id));
    setIsOpenModal(true);
  };

  return {
    handleClickPoster,
    setIsOpenModal,
    isOpenModal,
  };
};

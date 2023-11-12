/* eslint-disable jsx-a11y/alt-text */
//core
import { useSelector } from 'react-redux';
//other
import css from './Modal.module.css';
import { SETTINGS } from '../../constants';
import { movieDetailSelectors } from '../../store/movieDetails';

interface IProps {
  setIsOpenModal: (props: boolean) => void;
}

export const Modal = ({ setIsOpenModal }: IProps) => {
  const movieDetails = useSelector(movieDetailSelectors.getMovieDetails);
  const isSucceed = useSelector(movieDetailSelectors.checkIsSucceed);

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isSucceed && (
        <div className={css.overflow} onClick={handleModalClose}>
          <div className={css.modal_wrapper}>
            {movieDetails.map((item) => (
              <>
                <p>{item.original_title}</p>
                <img src={SETTINGS.POSTER.MODAL_URL + item.backdrop_path} />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

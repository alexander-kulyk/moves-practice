/* eslint-disable jsx-a11y/alt-text */
//other
import css from './MoviesList.module.css';
import { SETTINGS } from '../../constants';
import { IMovie } from '../../types';

interface IProps {
  handleClickPoster: (id: number) => void;
  moviesList: IMovie[];
}

export const MoviesList = ({ handleClickPoster, moviesList }: IProps) => {
  return (
    <ul className={css.wrapper}>
      {moviesList.map((item) => (
        <li
          className={css.list}
          key={item.id}
          onClick={() => handleClickPoster(item.id)}
        >
          <p>{item.original_title}</p>
          <div className={css.poster}>
            <img src={SETTINGS.POSTER.URL + item.poster_path} />
          </div>
        </li>
      ))}
    </ul>
  );
};

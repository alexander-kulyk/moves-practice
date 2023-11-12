//core
import { Outlet } from 'react-router-dom';
//other
import { SETTINGS, ROUTES } from '../../constants';
import css from './Layout.module.css';
import * as S from './styled';

export const Layout = () => {
  return (
    <div>
      <div className={css.nav_wrapper}>
        <S.StyledLink to={ROUTES.HOME}>{SETTINGS.PAGES.HOME}</S.StyledLink>
        <S.StyledLink to={ROUTES.TRENDING}>
          {SETTINGS.PAGES.TRENDING_MOVIES}
        </S.StyledLink>
      </div>
      <Outlet />
    </div>
  );
};

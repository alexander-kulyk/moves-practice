//core
import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
//components
import { Layout, PageNotFound } from './components';
import { TrendingMovies, StarWars } from './pages';
//other
import { ROUTES } from './constants';
import { fetchStarWarsMovies } from './store/starWarsMovies/thunks';
import { fetchTrendingMovies } from './store/trendingMovies/thunk';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    /* @ts-ignore */
    dispatch(fetchTrendingMovies());
    /* @ts-ignore */
    dispatch(fetchStarWarsMovies());
  }, []);

  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<StarWars />} />
          <Route path={ROUTES.TRENDING} element={<TrendingMovies />} />
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

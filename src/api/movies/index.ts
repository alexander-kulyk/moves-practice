import axios from 'axios';
import { API } from '../../constants';

const serviceUri = API.movies.uri;
const serviceKey = API.key;

export const movies = {
  trendingMovies: () => {
    const url = `${serviceUri}trending/movie/day?api_key=${serviceKey}&page=1`;
    return axios.get(url);
  },
  movieDetails: (id: number) => {
    const url = `${serviceUri}movie/${id}?api_key=${serviceKey}`;
    return axios.get(url);
  },
  starWarsMovies: () => {
    const url = `${serviceUri}/search/movie?api_key=${serviceKey}&query=star+wars&page=1`;
    return axios.get(url);
  },
};

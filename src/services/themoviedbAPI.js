// API themoviedb.org

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8f517ea939a3e5bbc59bc55f9e33cbf1';

export async function getTrendingMovies() {
    // https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
    return await axios.get(`/trending/movie/day/day?api_key=${API_KEY}`);
}

export async function getSearchedMovies(query) {
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: query,
        language: 'en-US',
       include_adult: false,
    });
return await axios.get(`/search/movie?${params}`);
}

export async function getMovieDetails(id) {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  return await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export async function getMovieCast(id) {
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  const { cast } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return cast;
}

export async function getMovieReviews(id) {
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  const {results} = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
  return results;
}


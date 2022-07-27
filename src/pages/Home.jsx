import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/themoviedbAPI';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { Title } from './pagesStyled/Page.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(setTrendingMovies)
      .catch(error => toast.error('Something went wrong. Please try again.'));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <Suspense fallback={<Loader />}>
        {trendingMovies && (
          <MovieList data={trendingMovies} url="movies/" location={location} />
        )}
      </Suspense>
    </main>
  );
};

export default Home;

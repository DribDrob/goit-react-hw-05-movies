import { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/themoviedbAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {/* //TrendMoviesList movies={trendingMovies}*/}
      <Suspense fallback={<div>Loading movie list...</div>}>
        <ul>
          {trendingMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </Suspense>
    </main>
  );
};

export default Home;

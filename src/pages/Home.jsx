import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/themoviedbAPI';
import { toast } from 'react-toastify';

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
      <h1>Trending today</h1>
      {/* //TrendMoviesList movies={trendingMovies}*/}
      <Suspense fallback={<div>Loading movie list...</div>}>
        <ul>
          {trendingMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Suspense>
    </main>
  );
};

export default Home;

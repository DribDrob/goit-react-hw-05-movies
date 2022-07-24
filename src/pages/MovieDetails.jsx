import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackLink } from '../components/BackLink/BackLink';
import { getMovieDetails } from '../services/themoviedbAPI';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(Number(movieId))
      .then(setMovieDetails)
      .catch(error => toast.error('Something went wrong. Please try again.'));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const { poster_path, title, overview, genres, vote_average } = movieDetails;
  const userScore = Math.round(vote_average * 10);
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img src={poster} alt={title} width="240" />
      <h2>{title}</h2>
      <p>User Score: {userScore}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genres.map(g => g.name).join(' ')}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

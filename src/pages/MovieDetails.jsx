import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
// import { BackLink } from '../components/BackLink';
import { getMovieDetails } from '../services/themoviedbAPI';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(Number(movieId)).then(setMovieDetails);
  }, [movieId]);

  //   const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/products';
  if (!movieDetails) {
    return null;
  }
  const { poster_path, title, overview, genres, vote_average } = movieDetails;
  const userScore = Math.round(vote_average * 10);
  return (
    <main>
      {/* <BackLink to={backLinkHref}>Back to products</BackLink> */}
      <img src={poster_path} alt={title} />
      <h2>{title}</h2>
      <p>User Score: {userScore}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genres.map(g => g.name)}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

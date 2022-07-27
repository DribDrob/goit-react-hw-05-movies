import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackLink } from '../components/BackLink/BackLink';
import { getMovieDetails } from '../services/themoviedbAPI';
import MovieCard from 'components/MovieCard/MovieCard';
import { AdditionalTitle } from './pagesStyled/Page.styled';
import { StyledLink } from 'components/BackLink/BackLink.styled';

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

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieCard data={movieDetails} />
      <AdditionalTitle>Additional information</AdditionalTitle>
      <ul>
        <li>
          <StyledLink to="cast" state={{ from: location.state.from }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: location.state.from }}>
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/themoviedbAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultCastImage from 'images/cast-default-image.jpg';
import { CardTitle, Item, List, Photo, PhotoContainer } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId))
      .then(setMovieCast)
      .catch(error => toast.error('Something went wrong. Please try again.'));
  }, [movieId]);

  if (!movieCast) {
    return null;
  }
  if (movieCast.length === 0) {
    return <p>We don't have any cast list for this movie.</p>;
  }

  return (
    <List>
      {movieCast.slice(0, 20).map(({ id, profile_path, name, character }) => {
        const photo = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : defaultCastImage;

        return (
          <Item key={id}>
            <PhotoContainer>
              <Photo src={photo} alt={name} width="150" />
            </PhotoContainer>
            <div>
              <CardTitle>{name}</CardTitle>
              <p>Character:</p>
              <p>{character}</p>
            </div>
          </Item>
        );
      })}
    </List>
  );
};

export default Cast;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/themoviedbAPI';
import { toast } from 'react-toastify';
import defaultCastPhoto from 'images/cast-photo.png';

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

  return (
    <ul>
      {movieCast.map(({ id, profile_path, name, character }) => {
        const photo = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : defaultCastPhoto;

        return (
          <li key={id}>
            <img src={photo} alt={name} width="100" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;

// "adult": false,
// "gender": 2,
// "id": 1190668,
// "known_for_department": "Acting",
// "name": "Timothée Chalamet",
// "original_name": "Timothée Chalamet",
// "popularity": 52.575,
// "profile_path": "/7ejM0s3hMZSnfibIX7OWXeQmRo.jpg",
// "cast_id": 3,
// "character": "Hal",
// "credit_id": "5a829feec3a3684cdf00e872",
// "order": 0
// },

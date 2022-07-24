import { useState, useEffect, useParams } from 'react';
import { getMovieCast } from 'services/themoviedbAPI';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId)).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }
  return (
    <main>
      <ul>
        {movieCast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img src={profile_path} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </main>
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

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { getSearchedMovies } from 'services/themoviedbAPI';
// import PropTypes from 'prop-types';

const schema = yup.object().shape({
  query: yup.string(),
});

const initialValues = {
  query: '',
};

const Movies = () => {
  const [moviesQuery, setMoviesQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSubmit = ({ query }, { resetForm }) => {
    if (query.trim() === '') {
      toast.error('Please, enter the search query.', { theme: 'dark' });
      return;
    }
    setMoviesQuery(query);
    resetForm();
  };
  useEffect(() => {
    getSearchedMovies(moviesQuery).then(setSearchedMovies);
  }, [moviesQuery]);

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="query"
          />
          <button type="submit">Search</button>
          <ErrorMessage name="query" />
        </Form>
      </Formik>
      <ul>
        {searchedMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Movies;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

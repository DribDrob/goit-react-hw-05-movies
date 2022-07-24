import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect, Suspense } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSubmit = ({ query }, { resetForm }) => {
    if (query.trim() === '') {
      toast.error('Please, enter the search query.', { theme: 'dark' });
      return;
    }
    setSearchParams(query !== '' ? { query: query } : {});
    resetForm();
  };
  useEffect(() => {
    if (query) {
      getSearchedMovies(query)
        .then(setSearchedMovies)
        .catch(error => toast.error('Something went wrong. Please try again.'));
    }
  }, [query]);

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
      <Suspense fallback={<div>Loading movie list...</div>}>
        <ul>
          {searchedMovies &&
            searchedMovies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
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
export default Movies;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

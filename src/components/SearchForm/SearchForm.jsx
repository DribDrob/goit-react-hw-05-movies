import { Formik, ErrorMessage } from 'formik';
import { FormEl, Input, Button } from './SearchForm.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string(),
});

const initialValues = {
  query: '',
};

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    if (query.trim() === '') {
      toast.error('Please, enter the search query.');
      return;
    }
    onSubmit(query);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
        <Button type="submit">Search</Button>
        <ErrorMessage name="query" />
      </FormEl>
    </Formik>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { List, Item } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ data, url, location }) => {
  return (
    <List>
      {data.map(({ id, title }) => {
        return (
          <Item key={id}>
            <RiMovie2Line />
            <Link to={`${url}${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};

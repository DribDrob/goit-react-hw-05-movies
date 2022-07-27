import { FaArrowLeft } from 'react-icons/fa';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FaArrowLeft size="12" />
      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};

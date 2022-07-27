import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color:  #5987c2;
  }
`;
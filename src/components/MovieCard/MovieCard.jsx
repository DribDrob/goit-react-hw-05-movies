import defaultPosterImage from 'images/poter-default-image.png';
import {
  Container,
  Subtitle,
  StatisticsTitle,
  StatisticsData,
} from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ data }) => {
  const { poster_path, title, overview, genres, vote_average } = data;
  const userScore = Math.round(vote_average * 10);
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultPosterImage;

  return (
    <Container>
      <img src={poster} alt={title} width="240" />
      <div>
        <Subtitle>{title}</Subtitle>
        <StatisticsTitle>
          User Score: <span>{userScore}%</span>
        </StatisticsTitle>

        <StatisticsTitle>Overview</StatisticsTitle>
        <StatisticsData>{overview}</StatisticsData>
        <StatisticsTitle>Genres</StatisticsTitle>
        <StatisticsData>{genres.map(g => g.name).join(' ')}</StatisticsData>
      </div>
    </Container>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

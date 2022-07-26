import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedbAPI';
import { Button, CardTitle, Item, List } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isFullTextOpen, setIsFullTextOpen] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId)).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return null;
  }

  if (movieReviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <List>
      {movieReviews.map(({ id, author, content }) => {
        return (
          <Item key={id}>
            <CardTitle>Author: {author}</CardTitle>
            <p>
              {isFullTextOpen
                ? content
                : content.split(' ').slice(0, 70).join(' ') + ' ...'}
            </p>
            <Button onClick={() => setIsFullTextOpen(true)}>Read more</Button>
          </Item>
        );
      })}
    </List>
  );
};

export default Reviews;

// "author": "SWITCH.",
// "author_details": {
// "name": "SWITCH.",
// "username": "maketheSWITCH",
// "avatar_path": "/klZ9hebmc8biG1RC4WmzNFnciJN.jpg",
// "rating": 2
// },
// "content": "‘The Lion King’ is a catastrophe; a new low in the ever-diminishing returns of Disney’s endless run of remakes. There’s nothing redeeming about it, with every decision either ill-conceived or mishandled to the point of incompetence. In Favreau’s hands, ‘The Lion King’ is rendered thunderously dull, lacking in any tension or complex characterisation, taking a laboriously long time to go nowhere and never once justifying its contentious existence. Even with my dislike of the original, I was flabbergasted at how thoroughly this film never attempts to understand why so many people love the 1994 film. If nothing else, this film makes it abundantly clear that Disney has no interest in making great cinema or honouring its own legacy. They don’t care whether the film is good or whether you enjoy it. All they care about is using nostalgia to trick you into buying your ticket so they can make as much money off you as they can, and maybe if they throw some recognisable iconic moments from your childhood on the screen, they may even be able to fool you into thinking you’d had a good time. ‘The Lion King’ is the ultimate diabolical apex of the commercialisation of nostalgia, and its inevitable box office success will just prove how easily we continue to be duped and how thoroughly they have trained us to not care about the quality of what we see. If this really is the future of mainstream cinema, then we are in serious, serious trouble.\r\n- Daniel Lammin\r\n\r\nRead Daniel's full article...\r\nhttps://www.maketheswitch.com.au/article/review-the-lion-king-a-catastrophic-and-soulless-remake-of-a-disney-classic",
// "created_at": "2019-07-16T14:17:33.081Z",
// "id": "5d2ddc7d6a300b0011a469df",
// "updated_at": "2021-06-23T15:58:24.307Z",
// "url": "https://www.themoviedb.org/review/5d2ddc7d6a300b0011a469df"
// }

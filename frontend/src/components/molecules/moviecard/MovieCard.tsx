import { ReactElement } from 'react';

import { MovieCardProps } from './types';
import { CardLink, CardPosterWrap, CardPoster, CardTitle } from './styled';

export function MovieCard({ id, image, title }: MovieCardProps): ReactElement {
  return (
    <CardLink to={`/movies/${id}`}>
      <CardPosterWrap>
        <CardPoster $image={image} />
      </CardPosterWrap>
      <CardTitle>{title}</CardTitle>
    </CardLink>
  );
}

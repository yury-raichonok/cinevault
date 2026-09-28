import { CarouselCardType } from '@app-types/common/types';

export interface CarouselProps {
  title: string;
  cards: CarouselCardType[];
  autoscroll?: boolean;
}

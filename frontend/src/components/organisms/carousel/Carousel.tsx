import { ReactElement, useRef, useState, useEffect, useCallback } from 'react';

import { MovieCard } from '@molecules/moviecard';

import { CarouselProps } from './types';
import {
  CarouselWrapper,
  CarouselHeader,
  CarouselTitle,
  CarouselControls,
  ArrowButton,
  CarouselTrack,
} from './styled';

const VISIBLE = 5;
const GAP = 12;
const ANIM_MS = 380;
const AUTOPLAY_MS = 3000;

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animateScroll(el: HTMLElement, to: number, ms: number): Promise<void> {
  const from = el.scrollLeft;
  if (Math.abs(to - from) < 1) return Promise.resolve();
  const t0 = performance.now();
  return new Promise(resolve => {
    const tick = (now: number) => {
      const p = Math.min((now - t0) / ms, 1);
      el.scrollLeft = from + (to - from) * easeInOut(p);
      p < 1 ? requestAnimationFrame(tick) : resolve();
    };
    requestAnimationFrame(tick);
  });
}

export function Carousel({ title, cards, autoscroll = false }: CarouselProps): ReactElement {
  const trackRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

  const scrollable = cards.length > 4;
  const loopCards = scrollable ? [...cards, ...cards] : cards;

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cardStep = useCallback((): number => {
    const w = trackRef.current?.clientWidth ?? 0;
    return (w + GAP) / VISIBLE;
  }, []);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el || !scrollable) return;
    const s = cardStep();
    const max = (cards.length - VISIBLE) * s;
    setAtStart(el.scrollLeft < 1);
    setAtEnd(el.scrollLeft > max - 1);
  }, [scrollable, cards.length, cardStep]);

  const goNext = useCallback(async (loop = false) => {
    if (busy.current) return;
    const el = trackRef.current;
    if (!el) return;
    busy.current = true;

    const s = cardStep();
    const singleWidth = cards.length * s;
    const target = el.scrollLeft + s;

    await animateScroll(el, target, ANIM_MS);

    if (loop && el.scrollLeft >= singleWidth - 1) {
      el.scrollLeft -= singleWidth;
    }

    busy.current = false;
    syncArrows();
  }, [cards.length, cardStep, syncArrows]);

  const goPrev = useCallback(async () => {
    if (busy.current) return;
    const el = trackRef.current;
    if (!el) return;
    busy.current = true;
    await animateScroll(el, Math.max(0, el.scrollLeft - cardStep()), ANIM_MS);
    busy.current = false;
    syncArrows();
  }, [cardStep, syncArrows]);

  // Auto-scroll: pauses on card hover
  useEffect(() => {
    if (!autoscroll || hovered || !scrollable) return;
    const id = setInterval(() => goNext(true), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [autoscroll, hovered, scrollable, goNext]);

  return (
    <CarouselWrapper>
      <CarouselHeader>
        <CarouselTitle>{title}</CarouselTitle>
        {scrollable && !autoscroll && (
          <CarouselControls>
            <ArrowButton onClick={goPrev} disabled={atStart}>
              &#8592;
            </ArrowButton>
            <ArrowButton onClick={() => goNext(false)} disabled={atEnd}>
              &#8594;
            </ArrowButton>
          </CarouselControls>
        )}
      </CarouselHeader>
      <CarouselTrack
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {loopCards.map((card, i) => (
          <MovieCard key={`${card.id}-${i}`} id={card.id} image={card.image} title={card.title} />
        ))}
      </CarouselTrack>
    </CarouselWrapper>
  );
}

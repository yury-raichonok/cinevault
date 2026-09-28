import { ReactElement, useEffect, useState } from "react";

import { HomePageWrapper } from './styled';

import { HeroSection } from "@organisms/herosection";
import { HeroMovieType } from "@app-types/movie/types";
import { generateMovieLink } from "@services/helpers/linkHelper";
import { getHeroMovie, getPopularMovies } from "@services/movie/movieService";
import { Carousel } from "@organisms/carousel";
import { CarouselCardType } from "@app-types/common/types";

export function HomePage(): ReactElement {
    const [heroMovie, setHeroMovie] = useState<HeroMovieType | null>(null);
    const [popularMovies, setPopularMovies] = useState<CarouselCardType[]>([]);
    const [movieLink, setMovieLink] = useState<string>('');

    useEffect(() => {
        const movie = getHeroMovie();
        if (movie) {
            setHeroMovie(movie);
            setMovieLink(generateMovieLink(movie.id))
        }
        const popularMovies = getPopularMovies();
        if (popularMovies) {
            setPopularMovies(popularMovies);
        }
    }, []);

    return (
        <HomePageWrapper>
            {heroMovie && (
                <HeroSection 
                    image={heroMovie.image}
                    text={heroMovie.description}
                    buttonText="View movie"
                    buttonLink={movieLink}
                />
            )}
            {popularMovies && (
                <Carousel title="Popular movies" cards={popularMovies} />
            )}
            {popularMovies && (
                <Carousel title="Popular movies" cards={popularMovies} />
            )}
            {popularMovies && (
                <Carousel title="Popular movies" cards={popularMovies} />
            )}
        </HomePageWrapper>
    )
}
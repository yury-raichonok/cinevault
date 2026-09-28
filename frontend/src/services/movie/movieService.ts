import { MovieType, HeroMovieType } from "@app-types/movie/types";

export function getHeroMovie(): HeroMovieType | null {
    return {
        id: '1',
        image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
        description: 'Movie description'
    };
}

export function getMovieById(id: string | undefined): MovieType | null {
    if (!id) {
        return null;
    }

    return {
        id: '1',
        image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
        title: 'Interesting movie',
        description: 'Movie description'
    };
}

export function getPopularMovies(): MovieType[] | null {
    return [
        {
            id: '1',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 1',
            description: 'Movie description'
        },
        {
            id: '2',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 2',
            description: 'Movie description'
        },
        {
            id: '3',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 3',
            description: 'Movie description'
        },
        {
            id: '4',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 4',
            description: 'Movie description'
        },
        {
            id: '5',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 5',
            description: 'Movie description'
        },
        {
            id: '6',
            image: 'https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg',
            title: 'Interesting movie 6',
            description: 'Movie description'
        },
    ]
}
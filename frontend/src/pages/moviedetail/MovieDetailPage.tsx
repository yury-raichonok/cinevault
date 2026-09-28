import { ButtonType } from "@app-types/common/types";
import { MovieType } from "@app-types/movie/types";
import { Button } from "@atoms/button";
import { getMovieById } from "@services/movie/movieService";
import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MovieDetailPage(): ReactElement {
    
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieType | null>();


    useEffect(() => {
        setMovie(getMovieById(id));
    }, []);

    return (
        <div>
            { movie && (
                <>
                    <Button 
                        type={ButtonType.LINK}
                        text="Go home"
                        link="/"
                    />
                    <span>
                        {movie.id}
                    </span>
                    <span>
                        {movie.description}
                    </span>
                    <img alt={movie.title} src={movie.image} />
                </>
            )}
        </div>
    )
}
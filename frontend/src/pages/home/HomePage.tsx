import { ReactElement } from "react";

import { HeroSection } from "@organisms/herosection";

export function HomePage(): ReactElement {
    return (
        <>
            <HeroSection 
                image="https://i.pinimg.com/1200x/dc/e8/cb/dce8cb3c261bd8143660aa2077edff48.jpg"
                buttonText="View movie" 
                buttonLink="/movies/100"
            />
        </>
    )
}
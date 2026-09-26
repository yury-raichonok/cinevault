import { ReactElement } from 'react';

import { ButtonType } from '@app-types/types';

import { HeroSectionProps } from './types';
import { HeroSectionStyled, HeroSectionButton } from './styled';


export function HeroSection({image, buttonText, buttonLink}: HeroSectionProps): ReactElement {
    return (
        <HeroSectionStyled backgroundImage={image}>
            <HeroSectionButton
                type={ButtonType.LINK} 
                text={buttonText} 
                link={buttonLink} 
            />
        </HeroSectionStyled>
    )
}
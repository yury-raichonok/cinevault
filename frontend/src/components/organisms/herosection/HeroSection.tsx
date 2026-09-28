import { ReactElement } from 'react';

import { ButtonStyle, ButtonType } from '@app-types/common/types';

import { HeroProps } from './types';
import { HeroWrapper, HeroStyled, HeroSectionButton } from './styled';

export function HeroSection({image, text, buttonText, buttonLink}: HeroProps): ReactElement {
    console.log(buttonLink);
    return (
        <HeroWrapper $backgroundImage={image}>
            <HeroStyled>
                <div>
                    <span>
                        {text}
                    </span>
                </div>
                <HeroSectionButton
                    type={ButtonType.LINK} 
                    style={ButtonStyle.TRANSPARENT}
                    text={buttonText} 
                    link={buttonLink} 
                />
            </HeroStyled>
        </HeroWrapper>
    )
}
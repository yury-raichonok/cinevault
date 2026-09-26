import styled from 'styled-components';
import { Button } from '@atoms/button';

export const HeroSectionStyled = styled.div<({ backgroundImage: string })>`
    background-image: ${({ backgroundImage }) => backgroundImage ? `url(${backgroundImage})` : 'none'};
    background: red;
    width: 100%;
    height: 500px;
    display: flex;
`;

export const HeroSectionButton = styled(Button)`
`;
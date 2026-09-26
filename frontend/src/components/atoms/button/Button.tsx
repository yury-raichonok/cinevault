import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ButtonType } from '@app-types/types';

import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export function Button({
    size,
    type, 
    text, 
    link, 
    onClick
}: ButtonProps): ReactElement | null {
    if (type === ButtonType.ACTION && onClick) {
        return (
            <ButtonStyled as="button" $size={size} onClick={onClick}>
                {text}
            </ButtonStyled>
        )
    } else if (type === ButtonType.LINK && link) {
        return (
            <ButtonStyled as={Link} $size={size} to={link}>
                {text}
            </ButtonStyled>
        )
    }

    return null;
}
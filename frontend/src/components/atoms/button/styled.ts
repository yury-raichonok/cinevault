import styled from 'styled-components';
import { BUTTON_SIZE } from '@app-types/types';
import { ButtonStyledProps } from './types'

export const ButtonStyled = styled.button<ButtonStyledProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    text-decoration: none;
    border-radius: 8px;

    width:  ${({ $size = 'md' }: ButtonStyledProps) => BUTTON_SIZE[$size].width};
    height: ${({ $size = 'md' }: ButtonStyledProps) => BUTTON_SIZE[$size].height};

    background: ${({ theme }) => theme.button.actionBg};
    color:      ${({ theme }) => theme.text.onAccent};

    &:hover {
      background: ${({ theme }) => theme.button.actionBgHover};
    }
`;
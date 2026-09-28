import styled, { css } from 'styled-components';

import { BUTTON_SIZE, ButtonStyle } from '@app-types/common/types';

import { ButtonStyledProps } from './types';

const defaultStyles = css`
  background: ${({ theme }) => theme.button.actionBg};
  color: ${({ theme }) => theme.text.onAccent};
  border: none;

  &:hover {
    background: ${({ theme }) => theme.button.actionBgHover};
  }

  &:active {
    background: ${({ theme }) => theme.button.actionBgActive};
  }
`;

const transparentStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.button.ghostText};
  border: 1px solid ${({ theme }) => theme.button.ghostBorder};

  &:hover {
    border-color: ${({ theme }) => theme.button.ghostBorderHover};
    background: ${({ theme }) => theme.accent.primaryMuted};
  }
`;

const disabledStyles = css`
  background: ${({ theme }) => theme.button.actionBgDisabled};
  color: ${({ theme }) => theme.text.muted};
  border: none;
  cursor: not-allowed;
  pointer-events: none;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  transition: background 0.18s, border-color 0.18s, color 0.18s;

  width:  ${({ $size = 'md' }: ButtonStyledProps) => BUTTON_SIZE[$size].width};
  height: ${({ $size = 'md' }: ButtonStyledProps) => BUTTON_SIZE[$size].height};

  ${({ $style = ButtonStyle.DEFAULT, $disabled }) => {
    if ($disabled) return disabledStyles;
    if ($style === ButtonStyle.TRANSPARENT) return transparentStyles;
    return defaultStyles;
  }}
`;
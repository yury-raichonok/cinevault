import styled from 'styled-components';
import { Button } from '@atoms/button';
import { HeroWrapperProps } from './types';

export const HeroWrapper = styled.div<HeroWrapperProps>`
  position: relative;
  width: 100%;
  height: 520px;

  background-image: url(${({ $backgroundImage }: { $backgroundImage: string }) => $backgroundImage});
  background-size: cover;
  background-position: center top;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.bg.page} 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
  }
`;

export const HeroStyled = styled.div`
  position: absolute;
  bottom: 36px;
  left: 48px;
  right: 48px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroSectionButton = styled(Button)`
`;
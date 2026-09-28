import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardPosterWrap = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
`;

export const CardPoster = styled.div<{ $image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
`;

export const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.bg.surface};
  text-decoration: none;
  color: inherit;
  isolation: isolate;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  &:hover ${CardPoster} {
    transform: scale(1.06);
  }
`;

export const CardTitle = styled.span`
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

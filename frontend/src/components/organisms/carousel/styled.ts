import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 48px;
`;

export const CarouselHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarouselTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

export const CarouselControls = styled.div`
  display: flex;
  gap: 6px;
`;

export const ArrowButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.nav.border};
  background: ${({ theme }) => theme.bg.surface};
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.accent.primaryMuted};
    border-color: ${({ theme }) => theme.accent.primary};
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;


export const CarouselTrack = styled.div`
  display: flex;
  gap: 12px;
  overflow: hidden;

  & > * {
    flex-shrink: 0;
    width: calc((100% - 48px) / 5);
  }
`;

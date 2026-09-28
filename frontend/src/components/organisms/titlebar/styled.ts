import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  background: ${({ theme }) => theme.bg.page};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};
  -webkit-app-region: drag;
  user-select: none;
  flex-shrink: 0;
`;

export const ControlGroup = styled.div`
  display: flex;
  gap: 4px;
  -webkit-app-region: no-drag;
`;

export const ControlBtn = styled.button<{ $close?: boolean }>`
  width: 28px;
  height: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.text.secondary};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ $close, theme }) =>
      $close ? '#C42B1C' : theme.bg.elevated};
    color: ${({ $close, theme }) =>
      $close ? '#FFFFFF' : theme.text.primary};
  }
`;

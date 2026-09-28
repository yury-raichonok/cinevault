import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  width: 220px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.bg.surface};
  border-right: 1px solid ${({ theme }) => theme.nav.border};
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SidebarLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
  padding: 4px 12px 8px;
`;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.nav.item};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.accent.primaryMuted};
    color: ${({ theme }) => theme.nav.itemHover};
  }

  &.active {
    background: ${({ theme }) => theme.accent.primaryMuted};
    color: ${({ theme }) => theme.nav.itemActive};
  }
`;

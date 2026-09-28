import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const NavWrapper = styled.nav`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 4px;
  background: ${({ theme }) => theme.nav.bg};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};
  backdrop-filter: blur(10px);
  flex-shrink: 0;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 24px;
`;

export const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 24px;
`;

export const Logo = styled(NavLink)`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.accent.primary};
  text-decoration: none;
  margin-right: 8px;
`;

export const NavItem = styled(NavLink)`
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.nav.item};
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.nav.itemHover};
    background: ${({ theme }) => theme.accent.primaryMuted};
  }

  &.active {
    color: ${({ theme }) => theme.nav.itemActive};
    background: ${({ theme }) => theme.accent.primaryMuted};
  }
`;

export const NavIconBtn = styled(NavLink)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.nav.item};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.accent.primaryMuted};
    color: ${({ theme }) => theme.nav.itemHover};
  }

  &.active {
    color: ${({ theme }) => theme.nav.itemActive};
  }
`;

export const NavBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.nav.item};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.accent.primaryMuted};
    color: ${({ theme }) => theme.nav.itemHover};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

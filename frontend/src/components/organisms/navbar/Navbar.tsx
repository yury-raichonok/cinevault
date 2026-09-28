import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import { Logo, NavBtn, NavCenter, NavIconBtn, NavItem, NavLeft, NavRight, NavWrapper } from './styled';

export function Navbar(): ReactElement {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <NavLeft>
        <NavBtn onClick={() => navigate(-1)} title="Back">&#8592;</NavBtn>
        <NavBtn onClick={() => navigate(1)} title="Forward">&#8594;</NavBtn>
        <Logo to="/">CINEVAULT</Logo>
      </NavLeft>

      <NavCenter>
        <NavItem to="/" end>Home</NavItem>
        <NavItem to="/movies">Catalog</NavItem>
        <NavItem to="/search">Search</NavItem>
        <NavItem to="/assistant">Assistant</NavItem>
        <NavItem to="/admin/movies">Admin</NavItem>
      </NavCenter>

      <NavRight>
        <NavIconBtn to="/notifications" title="Notifications">&#128276;</NavIconBtn>
        <NavIconBtn to="/profile" title="Profile">&#128100;</NavIconBtn>
        <NavIconBtn to="/settings" title="Settings">&#9881;</NavIconBtn>
      </NavRight>
    </NavWrapper>
  );
}

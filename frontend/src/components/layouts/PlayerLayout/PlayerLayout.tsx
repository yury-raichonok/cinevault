import { ReactElement } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { PlayerLayoutWrapper, PlayerLayoutBackButton } from './styled'; 

export function PlayerLayout(): ReactElement {
  const navigate = useNavigate();
  return (
    <PlayerLayoutWrapper>
      <PlayerLayoutBackButton onClick={() => navigate(-1)}>&#8592; Back</PlayerLayoutBackButton>
      <Outlet />
    </PlayerLayoutWrapper>
  );
}

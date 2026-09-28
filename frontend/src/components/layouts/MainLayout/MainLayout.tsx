import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import { MainLayoutWrapper, MainLayoutContent } from './styled';

import { Navbar } from '@organisms/navbar';
import { TitleBar } from '@organisms/titlebar';

export function MainLayout(): ReactElement {
  return (
    <MainLayoutWrapper>
      <TitleBar />
      <Navbar />
      <MainLayoutContent>
        <Outlet />
      </MainLayoutContent>
    </MainLayoutWrapper>
  );
}

import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import { AuthLayoutWrapper, AuthLayoutCenteredContent } from './styled';

import { TitleBar } from '@organisms/titlebar';

export function AuthLayout(): ReactElement {
  return (
    <AuthLayoutWrapper>
      <TitleBar />
      <AuthLayoutCenteredContent>
        <Outlet />
      </AuthLayoutCenteredContent>
    </AuthLayoutWrapper>
  );
}

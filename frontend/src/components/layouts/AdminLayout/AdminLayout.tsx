import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

import { AdminLayoutWrapper, AdminLayoutBody, AdminLayoutContent } from './styled';

import { AdminSidebar } from '@organisms/adminsidebar';
import { Navbar } from '@organisms/navbar';
import { TitleBar } from '@organisms/titlebar';

export function AdminLayout(): ReactElement {
  return (
    <AdminLayoutWrapper>
      <TitleBar />
      <Navbar />
      <AdminLayoutBody>
        <AdminSidebar />
        <AdminLayoutContent>
          <Outlet />
        </AdminLayoutContent>
      </AdminLayoutBody>
    </AdminLayoutWrapper>
  );
}

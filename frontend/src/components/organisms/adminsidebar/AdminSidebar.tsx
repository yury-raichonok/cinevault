import { ReactElement } from 'react';

import { SidebarItem, SidebarLabel, SidebarWrapper } from './styled';

export function AdminSidebar(): ReactElement {
  return (
    <SidebarWrapper>
      <SidebarLabel>Content</SidebarLabel>
      <SidebarItem to="/admin/movies" end>&#127916; Movies</SidebarItem>
      <SidebarItem to="/admin/movies/new">&#43; Add Movie</SidebarItem>
    </SidebarWrapper>
  );
}

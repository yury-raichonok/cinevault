import styled from "styled-components";

export const AdminLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.bg.page};
`;

export const AdminLayoutBody = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const AdminLayoutContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 32px;
`;
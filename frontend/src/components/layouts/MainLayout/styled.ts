import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.bg.page};
`;

export const MainLayoutContent = styled.main`
  flex: 1;
  overflow-y: auto;
`;
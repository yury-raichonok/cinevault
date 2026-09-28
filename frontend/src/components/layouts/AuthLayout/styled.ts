import styled from "styled-components";

export const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.bg.page};
`;

export const AuthLayoutCenteredContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
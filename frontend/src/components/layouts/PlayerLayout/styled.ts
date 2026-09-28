import styled from "styled-components";

export const PlayerLayoutWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 100;
`;

export const PlayerLayoutBackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: rgba(0, 0, 0, 0.9); }
`;
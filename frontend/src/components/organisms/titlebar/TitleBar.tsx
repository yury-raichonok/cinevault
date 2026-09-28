import { ReactElement } from 'react';

import { ControlBtn, ControlGroup, TitleBarWrapper } from './styled';

export function TitleBar(): ReactElement {
  return (
    <TitleBarWrapper>
      <ControlGroup>
        <ControlBtn onClick={() => window.electronAPI.minimize()} title="Minimize">─</ControlBtn>
        <ControlBtn onClick={() => window.electronAPI.maximize()} title="Maximize">□</ControlBtn>
        <ControlBtn $close onClick={() => window.electronAPI.close()} title="Close">✕</ControlBtn>
      </ControlGroup>
    </TitleBarWrapper>
  );
}

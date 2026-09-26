export type ThemeId = 'lightDefault' | 'darkGold' | 'neonViolet' | 'crimsonDark' | 'oceanBlue';

export interface ThemeBg {
  page: string;
  surface: string;
  elevated: string;
  overlay: string;
}

export interface ThemeAccent {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryMuted: string;
  secondary: string;
}

export interface ThemeText {
  primary: string;
  secondary: string;
  muted: string;
  onAccent: string;
}

export interface ThemeNav {
  bg: string;
  border: string;
  item: string;
  itemHover: string;
  itemActive: string;
}

export interface ThemeButton {
  actionBg: string;
  actionBgHover: string;
  actionBgActive: string;
  actionBgDisabled: string;
  actionText: string;
  ghostBorder: string;
  ghostBorderHover: string;
  ghostText: string;
}

export interface ThemeGradient {
  heroMask: string;
  heroBottom: string;
  pageRadial: string;
  cardHover: string;
  neonLine: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  bg: ThemeBg;
  accent: ThemeAccent;
  text: ThemeText;
  nav: ThemeNav;
  button: ThemeButton;
  gradient: ThemeGradient;
}

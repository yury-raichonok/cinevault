import { Theme, ThemeId } from './types';

// ─── Light Default (Cinema Blanc) ──────────────────────────────────────────
const lightDefault: Theme = {
  id: 'lightDefault',
  name: 'Cinema Blanc',

  bg: {
    page:     '#F7F5F0',
    surface:  '#FFFFFF',
    elevated: '#EDE9E0',
    overlay:  'rgba(247, 245, 240, 0.92)',
  },

  accent: {
    primary:      '#1A1A2E',
    primaryHover: '#2D2D4F',
    primaryActive:'#0D0D1E',
    primaryMuted: 'rgba(26, 26, 46, 0.08)',
    secondary:    '#B8922A',
  },

  text: {
    primary:  '#0F0F14',
    secondary:'#6B6B7E',
    muted:    '#A0A0B0',
    onAccent: '#FFFFFF',
  },

  nav: {
    bg:         'rgba(255, 255, 255, 0.92)',
    border:     'rgba(26, 26, 46, 0.08)',
    item:       '#6B6B7E',
    itemHover:  '#0F0F14',
    itemActive: '#1A1A2E',
  },

  button: {
    actionBg:         '#1A1A2E',
    actionBgHover:    '#2D2D4F',
    actionBgActive:   '#0D0D1E',
    actionBgDisabled: '#D0CFD8',
    actionText:       '#FFFFFF',
    ghostBorder:      'rgba(26, 26, 46, 0.25)',
    ghostBorderHover: '#1A1A2E',
    ghostText:        '#1A1A2E',
  },

  gradient: {
    heroMask:   'linear-gradient(to right, #F7F5F0 30%, transparent 70%)',
    heroBottom: 'linear-gradient(to top, #F7F5F0 0%, transparent 60%)',
    pageRadial: 'radial-gradient(ellipse at 20% 50%, rgba(26, 26, 46, 0.04) 0%, transparent 60%)',
    cardHover:  'linear-gradient(135deg, rgba(26, 26, 46, 0.04), transparent)',
    neonLine:   'linear-gradient(90deg, transparent, #1A1A2E, transparent)',
  },
};

// ─── Dark Gold ─────────────────────────────────────────────────────────────
const darkGold: Theme = {
  id: 'darkGold',
  name: 'Dark Gold',

  bg: {
    page:     '#09090F',
    surface:  '#111118',
    elevated: '#1A1A26',
    overlay:  'rgba(9, 9, 15, 0.85)',
  },

  accent: {
    primary:      '#C9A84C',
    primaryHover: '#E2C06A',
    primaryActive:'#A8882E',
    primaryMuted: 'rgba(201, 168, 76, 0.15)',
    secondary:    '#C9A84C',
  },

  text: {
    primary:  '#F0EDE4',
    secondary:'#8A8A9E',
    muted:    '#4A4A5E',
    onAccent: '#09090F',
  },

  nav: {
    bg:         'rgba(9, 9, 15, 0.90)',
    border:     'rgba(201, 168, 76, 0.12)',
    item:       '#8A8A9E',
    itemHover:  '#F0EDE4',
    itemActive: '#C9A84C',
  },

  button: {
    actionBg:         '#C9A84C',
    actionBgHover:    '#E2C06A',
    actionBgActive:   '#A8882E',
    actionBgDisabled: '#3A3528',
    actionText:       '#09090F',
    ghostBorder:      'rgba(201, 168, 76, 0.40)',
    ghostBorderHover: '#C9A84C',
    ghostText:        '#C9A84C',
  },

  gradient: {
    heroMask:   'linear-gradient(to right, #09090F 30%, transparent 70%)',
    heroBottom: 'linear-gradient(to top, #09090F 0%, transparent 60%)',
    pageRadial: 'radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 60%)',
    cardHover:  'linear-gradient(135deg, rgba(201, 168, 76, 0.10), transparent)',
    neonLine:   'linear-gradient(90deg, transparent, #C9A84C, transparent)',
  },
};

// ─── Neon Violet ───────────────────────────────────────────────────────────
const neonViolet: Theme = {
  id: 'neonViolet',
  name: 'Neon Violet',

  bg: {
    page:     '#080810',
    surface:  '#0F0F1E',
    elevated: '#161628',
    overlay:  'rgba(8, 8, 16, 0.88)',
  },

  accent: {
    primary:      '#7C3AED',
    primaryHover: '#9461F5',
    primaryActive:'#6025D4',
    primaryMuted: 'rgba(124, 58, 237, 0.15)',
    secondary:    '#06C8DD',
  },

  text: {
    primary:  '#E2E8F0',
    secondary:'#7070A0',
    muted:    '#3D3D60',
    onAccent: '#FFFFFF',
  },

  nav: {
    bg:         'rgba(8, 8, 16, 0.90)',
    border:     'rgba(124, 58, 237, 0.15)',
    item:       '#7070A0',
    itemHover:  '#E2E8F0',
    itemActive: '#A78BF5',
  },

  button: {
    actionBg:         '#7C3AED',
    actionBgHover:    '#9461F5',
    actionBgActive:   '#6025D4',
    actionBgDisabled: '#2A1F4A',
    actionText:       '#FFFFFF',
    ghostBorder:      'rgba(124, 58, 237, 0.45)',
    ghostBorderHover: '#7C3AED',
    ghostText:        '#A78BF5',
  },

  gradient: {
    heroMask:   'linear-gradient(to right, #080810 25%, transparent 65%)',
    heroBottom: 'linear-gradient(to top, #080810 0%, transparent 55%)',
    pageRadial: 'radial-gradient(ellipse at 70% 20%, rgba(6, 200, 221, 0.05) 0%, transparent 50%)',
    cardHover:  'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.20), transparent 70%)',
    neonLine:   'linear-gradient(90deg, transparent, #7C3AED, #06C8DD, transparent)',
  },
};

// ─── Crimson Dark ──────────────────────────────────────────────────────────
const crimsonDark: Theme = {
  id: 'crimsonDark',
  name: 'Crimson Dark',

  bg: {
    page:     '#0D0D0D',
    surface:  '#161616',
    elevated: '#1F1F1F',
    overlay:  'rgba(13, 13, 13, 0.90)',
  },

  accent: {
    primary:      '#DC2626',
    primaryHover: '#EF4444',
    primaryActive:'#B91C1C',
    primaryMuted: 'rgba(220, 38, 38, 0.15)',
    secondary:    '#DC2626',
  },

  text: {
    primary:  '#FFFFFF',
    secondary:'#6B6B6B',
    muted:    '#3A3A3A',
    onAccent: '#FFFFFF',
  },

  nav: {
    bg:         'rgba(13, 13, 13, 0.92)',
    border:     'rgba(255, 255, 255, 0.06)',
    item:       '#6B6B6B',
    itemHover:  '#FFFFFF',
    itemActive: '#EF4444',
  },

  button: {
    actionBg:         '#DC2626',
    actionBgHover:    '#EF4444',
    actionBgActive:   '#B91C1C',
    actionBgDisabled: '#3A1515',
    actionText:       '#FFFFFF',
    ghostBorder:      'rgba(220, 38, 38, 0.40)',
    ghostBorderHover: '#DC2626',
    ghostText:        '#EF4444',
  },

  gradient: {
    heroMask:   'linear-gradient(to right, #0D0D0D 20%, transparent 60%)',
    heroBottom: 'linear-gradient(to top, #0D0D0D 0%, transparent 50%)',
    pageRadial: 'radial-gradient(ellipse at 50% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
    cardHover:  'linear-gradient(180deg, transparent 50%, rgba(220, 38, 38, 0.15) 100%)',
    neonLine:   'linear-gradient(90deg, transparent, #DC2626, transparent)',
  },
};

// ─── Ocean Blue ────────────────────────────────────────────────────────────
const oceanBlue: Theme = {
  id: 'oceanBlue',
  name: 'Ocean Blue',

  bg: {
    page:     '#030A14',
    surface:  '#071020',
    elevated: '#0C1A30',
    overlay:  'rgba(3, 10, 20, 0.88)',
  },

  accent: {
    primary:      '#0EA5E9',
    primaryHover: '#38BDF8',
    primaryActive:'#0284C7',
    primaryMuted: 'rgba(14, 165, 233, 0.15)',
    secondary:    '#6366F1',
  },

  text: {
    primary:  '#EFF6FF',
    secondary:'#64748B',
    muted:    '#1E3A5F',
    onAccent: '#030A14',
  },

  nav: {
    bg:         'rgba(3, 10, 20, 0.92)',
    border:     'rgba(14, 165, 233, 0.15)',
    item:       '#64748B',
    itemHover:  '#EFF6FF',
    itemActive: '#38BDF8',
  },

  button: {
    actionBg:         '#0EA5E9',
    actionBgHover:    '#38BDF8',
    actionBgActive:   '#0284C7',
    actionBgDisabled: '#0A1828',
    actionText:       '#030A14',
    ghostBorder:      'rgba(14, 165, 233, 0.40)',
    ghostBorderHover: '#0EA5E9',
    ghostText:        '#38BDF8',
  },

  gradient: {
    heroMask:   'linear-gradient(to right, #030A14 25%, transparent 65%)',
    heroBottom: 'linear-gradient(to top, #030A14 0%, transparent 55%)',
    pageRadial: 'radial-gradient(ellipse at 30% 50%, rgba(14, 165, 233, 0.10) 0%, transparent 55%)',
    cardHover:  'radial-gradient(ellipse at 70% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
    neonLine:   'linear-gradient(90deg, transparent, #0EA5E9, #6366F1, transparent)',
  },
};

// ─── Public API ────────────────────────────────────────────────────────────

export const THEMES: Record<ThemeId, Theme> = {
  lightDefault,
  darkGold,
  neonViolet,
  crimsonDark,
  oceanBlue,
};

export const THEME_LIST: Theme[] = Object.values(THEMES);

export const DEFAULT_THEME_ID: ThemeId = 'lightDefault';

export type { Theme, ThemeId };

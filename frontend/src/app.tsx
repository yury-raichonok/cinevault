import { ReactElement, useState } from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AdminLayout, AuthLayout, MainLayout, PlayerLayout } from '@layouts/index';
import {
  AdminMovieFormPage,
  AdminMoviesPage,
  AssistantPage,
  CatalogPage,
  HomePage,
  LoginPage,
  MovieDetailPage,
  NotificationsPage,
  ProfilePage,
  RegisterPage,
  SearchPage,
  SettingsPage,
  WatchPage,
} from '@pages/index';
import { GlobalStyle } from '@styles/GlobalStyle';
import { DEFAULT_THEME_ID, THEMES } from '@styles/themes';

export function App(): ReactElement {
  const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);

  return (
    <ThemeProvider theme={THEMES[themeId]}>
      <GlobalStyle />
      <HashRouter>
        <Routes>

          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<CatalogPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Route>

          <Route element={<PlayerLayout />}>
            <Route path="/watch/:id" element={<WatchPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin/movies" element={<AdminMoviesPage />} />
            <Route path="/admin/movies/new" element={<AdminMovieFormPage />} />
            <Route path="/admin/movies/:id/edit" element={<AdminMovieFormPage />} />
          </Route>

        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

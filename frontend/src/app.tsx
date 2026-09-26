import { ReactElement, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { THEMES, DEFAULT_THEME_ID } from '@styles/themes';

import { HomePage } from '@pages/home';

export function App(): ReactElement {
    const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);

    return (
        <ThemeProvider theme={THEMES[themeId]}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<div>movies</div>} />
                    <Route path="/movies/:id" element={<div>Details</div>} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    )
};
import React from 'react';
import { Layout } from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    )
}
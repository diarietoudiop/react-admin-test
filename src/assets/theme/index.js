// src/theme.js
import { defaultTheme } from 'react-admin';

export const lightTheme = {
    ...defaultTheme,
    palette: {
        primary: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff4081',
            light: '#ff79b0',
            dark: '#c60055',
            contrastText: '#fff',
        },
        background: {
            default: '#f5f5f5',
        },
        mode: 'light'
    },
    typography: {
        h1: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
    },
};

export const darkTheme = {
    ...defaultTheme,
    palette: {
        primary: {
            main: '#90caf9',
            light: '#c3fdff',
            dark: '#5d99c6',
            contrastText: '#000',
        },
        secondary: {
            main: '#f48fb1',
            light: '#ffc1e3',
            dark: '#bf5f82',
            contrastText: '#000',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
        mode: 'dark',
    },
    typography: lightTheme.typography,
};
import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState('light');
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode]);
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <ThemeContext.Provider value={{ mode, toggleTheme }}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}

export const useTheme = () => useContext(ThemeContext);
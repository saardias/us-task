import { createTheme } from '@mui/material/styles';

export const getMainTheme = (mode: 'dark' | 'light') => {
    return createTheme({
        palette: {
            mode: mode,
        },
    })
}


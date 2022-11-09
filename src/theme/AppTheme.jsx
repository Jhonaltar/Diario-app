import { ThemeProvider } from '@emotion/react';
import {CssBaseline} from '@mui/material';
import { colorsTheme } from './';

export const AppTheme = ({children}) => {
  return (
     <ThemeProvider theme={colorsTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

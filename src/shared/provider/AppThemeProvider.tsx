'use client';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { theme } from '@styles';
import React from 'react';
type AppThemeProviderProps = {
  children: React.ReactNode;
};
function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        preventDuplicate
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default AppThemeProvider;

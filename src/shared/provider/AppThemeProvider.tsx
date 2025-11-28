'use client';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import React from 'react';
type AppThemeProviderProps = {
  children: React.ReactNode;
};
function AppThemeProvider({ children }: AppThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;

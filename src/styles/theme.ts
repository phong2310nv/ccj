import { createTheme } from '@mui/material';
import { components as themeComponents } from './components';
import { palette as themePalette } from './palette';
import { breakpoints as breakpointTokens } from './tokens/breakpoints';
import { borderRadius as borderRadiusTokens } from './tokens/radius';
import { muiShadows } from './tokens/shadows';
import { spacing as spacingTokens } from './tokens/spacing';
import { typography as themeTypography } from './typography';

export const theme = createTheme({
  breakpoints: {
    values: breakpointTokens,
  },

  palette: themePalette,

  // Typography
  typography: themeTypography,

  // Shape - using design token border radius
  shape: {
    borderRadius: parseInt(borderRadiusTokens.base), // Default: 8px from tokens
  },

  // Spacing (4px base unit - using design tokens)
  spacing: (factor: number) => {
    const value = spacingTokens[factor as keyof typeof spacingTokens];
    return value !== undefined ? `${value}px` : `${factor * 4}px`;
  },

  // Shadows - using design token shadows
  shadows: muiShadows,

  // Z-index - custom z-index scale
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // Transitions - using MUI defaults
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: themeComponents,
});

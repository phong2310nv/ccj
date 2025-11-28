import { PaletteOptions } from '@mui/material';
import { colors } from './tokens/colors';

/**
 * V4 Palette Configuration
 * Uses semantic color tokens mapped from design tokens
 */

export const palette: PaletteOptions = {
  // Mode
  mode: 'light' as const,

  // Primary color (Purple)
  primary: {
    main: colors.orange[500],
    light: colors.purple[400],
    dark: colors.purple[700],
    contrastText: colors.neutral[0],
  },

  // Secondary color (Neutral)
  secondary: {
    main: colors.neutral[400],
    light: colors.neutral[300],
    dark: colors.neutral[500],
    contrastText: colors.neutral[900],
  },

  // Error states
  error: {
    main: colors.error[500],
    light: colors.error[100],
    dark: colors.error[600],
    contrastText: colors.neutral[0],
  },

  // Warning states
  warning: {
    main: colors.warning[500],
    light: colors.warning[50],
    dark: colors.warning[600],
    contrastText: colors.neutral[900],
  },

  // Info states
  info: {
    main: colors.blue[500],
    light: colors.blue[100],
    dark: colors.blue[700],
    contrastText: colors.neutral[0],
  },

  // Success states
  success: {
    main: colors.success[500],
    light: colors.success[50],
    dark: colors.success[600],
    contrastText: colors.neutral[0],
  },

  // Text colors
  text: {
    primary: '#0D1E33',
    secondary: '#475569',
    disabled: colors.neutral[500],
  },

  // Background colors
  background: {
    default: colors.neutral[100],
    paper: colors.neutral[0],
  },

  // Divider
  divider: colors.neutral[300],

  // Action colors
  action: {
    active: colors.neutral[700],
    hover: colors.neutral[100],
    selected: colors.neutral[200],
    disabled: colors.neutral[1050],
    disabledBackground: colors.neutral[150],
    focus: colors.neutral[300],
    activatedOpacity: 0.12,
    hoverOpacity: 0.04,
    selectedOpacity: 0.08,
    disabledOpacity: 0.38,
    focusOpacity: 0.12,
  },
  grey: {
    900: colors.neutral[900],
    800: colors.neutral[800],
    700: colors.neutral[700],
    600: colors.neutral[600],
    500: colors.neutral[500],
    400: colors.neutral[400],
    300: colors.neutral[300],
    200: colors.neutral[200],
    100: colors.neutral[100],
    50: colors.neutral[50],
  },
} as const;

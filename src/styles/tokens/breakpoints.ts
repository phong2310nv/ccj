/**
 * Breakpoint Tokens - V4
 * Screen size breakpoints for responsive design
 *
 * Follows MUI's breakpoint system
 * Usage: Use in theme configuration and media queries
 */

import { createTheme } from '@mui/material';

export const breakpoints = {
  xs: 0, // Extra small devices (phones)
  sm: 600, // Small devices (portrait tablets and large phones)
  md: 900, // Medium devices (landscape tablets)
  lg: 1200, // Large devices (laptops/desktops)
  xl: 1536, // Extra large devices (large desktops)
  xxl: 1920, // Extra extra large devices
  xxxl: 2560, // Extra extra extra large devices
};

// Type helper
export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[Breakpoint];

// Helper to get breakpoint values in px
export const breakpointsInPx = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  xxl: `${breakpoints.xxl}px`,
  xxxl: `${breakpoints.xxxl}px`,
} as const;

const themeWithBreakpoints = createTheme({
  breakpoints: {
    values: breakpoints,
  },
});

export const themeBreakPoint = themeWithBreakpoints.breakpoints;

// Use for laptop screen
type GetBreakpointLapTopConfig = {
  minWidthPx?: number;
  maxHeightPx?: number;
};
export const getBreakpointLapTop = (config: GetBreakpointLapTopConfig = {}) => {
  const { minWidthPx = 1200, maxHeightPx = 850 } = config;
  return `@media (min-width: ${minWidthPx}px) and (max-height: ${maxHeightPx}px)`;
};

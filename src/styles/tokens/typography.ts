/**
 * Typography Tokens - V4
 * Font families, sizes, weights, and line heights
 *
 * Usage: Map these tokens to MUI typography variants
 */

// Font families
export const fontFamily = {
  primary: 'var(--font-inter), sans-serif',
  mono: '"Roboto Mono", "Courier New", monospace',
} as const;

// Font weights
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Font sizes
export const fontSize = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '32px',
  '5xl': '36px',
  '6xl': '40px',
  '7xl': '48px',
  '8xl': '56px',
  '9xl': '64px',
} as const;

// Line heights
export const lineHeight = {
  none: '1',
  tight: '18px',
  snug: '20px',
  normal: '24px',
  '2xl': '26px',
  relaxed: '28px',
  loose: '32px',
  '3xl': '36px',
  '4xl': '40px',
  '5xl': '44px',
  '6xl': '48px',
} as const;

// Letter spacing
export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0',
  wide: '0.01em',
  wider: '0.02em',
  widest: '0.08em',
} as const;

// Type helpers
export type FontFamily = keyof typeof fontFamily;
export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;

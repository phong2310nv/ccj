/**
 * Border Radius Tokens - V4
 * Consistent border radius values for components
 *
 * Usage: Apply to buttons, cards, inputs, and other UI elements
 */

export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  full: '500px', // For pill-shaped elements
  circle: '50%', // For circular elements
} as const;

// Type helper
export type BorderRadius = keyof typeof borderRadius;
export type BorderRadiusValue = (typeof borderRadius)[BorderRadius];

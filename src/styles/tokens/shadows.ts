/**
 * Shadow Tokens - V4
 * Box shadow values for elevation and depth
 *
 * Usage: Apply to cards, modals, dropdowns, and elevated components
 */

export const shadows = {
  // Subtle shadows
  xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',

  // Standard shadows
  md: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',

  // Large shadows
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',

  // Special shadows
  primary: '0px 4px 12px 4px rgba(151, 71, 255, 0.24)', // Purple glow for primary buttons
  inner: 'inset 0px 2px 4px 0px rgba(16, 24, 40, 0.06)', // Inset shadow
  none: 'none',
} as const;

// MUI Shadow array (24 levels + none)
export const muiShadows: [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
] = [
  'none',
  shadows.xs, // 1
  shadows.sm, // 2
  shadows.md, // 3
  shadows.md, // 4
  shadows.lg, // 5
  shadows.lg, // 6
  shadows.xl, // 7
  shadows.xl, // 8
  shadows['2xl'], // 9
  shadows['2xl'], // 10
  shadows['2xl'], // 11
  shadows['3xl'], // 12
  shadows['3xl'], // 13
  shadows['3xl'], // 14
  shadows['3xl'], // 15
  shadows['3xl'], // 16
  shadows['3xl'], // 17
  shadows['3xl'], // 18
  shadows['3xl'], // 19
  shadows['3xl'], // 20
  shadows['3xl'], // 21
  shadows['3xl'], // 22
  shadows['3xl'], // 23
  shadows['3xl'], // 24
];

// Type helper
export type Shadow = keyof typeof shadows;
export type ShadowValue = (typeof shadows)[Shadow];

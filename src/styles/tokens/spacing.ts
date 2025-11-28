/**
 * Spacing Tokens - V4
 * Spacing scale for margins, padding, and gaps
 *
 * Base unit: 4px
 * Usage: Use these tokens for consistent spacing across components
 */

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  13: 52,
  14: 56,
  16: 64,
  17: 68,
  18: 72,
  20: 80,
  21: 84,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  70: 280,
  72: 288,
  80: 320,
  96: 384,
} as const;

// Type helper
export type SpacingKey = keyof typeof spacing;
export type SpacingValue = (typeof spacing)[SpacingKey];

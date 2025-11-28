/**
 * Color Tokens - V4
 * Base color primitives for the design system
 *
 * These are raw color values that should be mapped to semantic tokens
 * in the palette configuration. Avoid using these directly in components.
 */

export const colors = {
  // Primary palette - Purple
  purple: {
    50: '#FAF5FF',
    100: '#F4EBFF',
    150: '#DFCEFF',
    200: '#E9D7FE',
    300: '#DFCEFF',
    400: '#B692F6',
    500: '#892EFF', // Main primary color
    600: '#9747FF',
    700: '#6941C6',
    800: '#53389E',
    900: '#541F94',
  },

  // Neutral palette - Grays
  neutral: {
    0: '#FFFFFF',
    50: '#F7F7F7',
    100: '#F6F6F6',
    150: '#E6E6E6',
    200: '#E9EAEB',
    300: '#E8E9E9',
    400: '#D5D7DA',
    450: '#A6A6A6',
    500: '#717680',
    600: '#535862',
    700: '#414651',
    800: '#414651',
    900: '#181D27',
    950: '#171C26',
    1000: '#020101ff',
    1050: '#808080',
  },

  // Accent palette - Blue
  blue: {
    50: '#F4FAFF',
    100: '#ECF7FF',
    200: '#DAEFFE',
    300: '#B4DFFD',
    400: '#8FCEFD',
    500: '#44AEFB',
    600: '#77C3F9',
    700: '#69BEFC',
  },

  // Semantic colors - Success
  success: {
    50: '#ECFDF3',
    100: '#D1FADF',
    400: '#12B76A',
    500: '#009926',
    600: '#027A48',
  },

  // Semantic colors - Error/Danger
  error: {
    50: '#FEF3F2',
    100: '#FFD9D9',
    500: '#CF2A2D',
    600: '#D92C1F',
    700: '#FF4848',
    800: '#DC0000',
  },

  danger: {
    300: '#FF8276',
    500: '#FF7163',
    700: '#FF5A49',
    900: '#FF4B39',
  },

  // Semantic colors - Warning
  warning: {
    50: '#FFF9C4',
    100: '#FFFAEB',
    500: '#FF923A',
    600: '#FFC107',
  },

  // Semantic colors - Info
  info: {
    500: '#010314',
  },

  // Additional brand colors
  pink: {
    500: '#ED6185',
  },
  orange: {
    500: '#FF9100',
  },
} as const;

// Type helper for color keys
export type ColorScale = keyof typeof colors;
export type ColorShade<T extends ColorScale> = keyof (typeof colors)[T];

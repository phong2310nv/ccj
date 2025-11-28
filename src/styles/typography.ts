import { fontFamily, fontWeight, fontSize, lineHeight, letterSpacing } from './tokens/typography';
import { themeBreakPoint } from './tokens';
import { Palette, TypographyVariantsOptions } from '@mui/material';

/**
 * V4 Typography Configuration
 * Following MUI best practices with design tokens
 */

export const typography: (palette: Palette) => TypographyVariantsOptions = palette => ({
  fontFamily: fontFamily.primary,
  allVariants: {
    color: palette.text.primary,
  },

  // Headings
  h1: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.bold,
    fontSize: '60px',
    lineHeight: '120%',
    letterSpacing: letterSpacing.normal,
  },

  h2: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.bold,
    fontSize: '52px',
    lineHeight: '140%',
    letterSpacing: letterSpacing.normal,
  },

  h3: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight['3xl'],
    letterSpacing: letterSpacing.tight,
  },

  h4: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: fontSize['lg'],
    lineHeight: lineHeight.loose,
    [themeBreakPoint.up('md')]: {
      fontSize: fontSize['2xl'],
    },
  },

  h5: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.loose,
  },

  h6: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.relaxed,
  },

  // Subtitles
  subtitle1: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.medium,
    lineHeight: '140%',
    color: palette.text.secondary,
  },

  // Body text
  body1: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.base,
    lineHeight: lineHeight.normal,
  },

  body2: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.snug,
    color: palette.text.secondary,
  },
});

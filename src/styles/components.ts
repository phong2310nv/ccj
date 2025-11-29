import { alpha, Components, CssVarsTheme, Theme } from '@mui/material';
import { fontWeight, lineHeight } from './tokens';

/**
 * V4 Component Style Overrides
 * Centralized component customization following MUI best practices
 */

export const components: Components<Omit<Theme, 'palette' | 'components'> & CssVarsTheme> = {
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '8px',
        border: `1px solid #475569`,
        padding: '16px 16px',
        height: '56px',
        fontSize: '18px',
        color: '#475569',
        backgroundColor: theme.palette.common.white,
        '&:focus-within': {
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-error': { border: `1px solid ${theme.palette.error.main}` },
      }),
      input: ({ theme }) => ({
        padding: 0,
        lineHeight: lineHeight.normal,
        '::placeholder,:-ms-input-placeholder,::-moz-placeholder,:-moz-placeholder,::-webkit-input-placeholder':
          {
            color: theme.palette.grey[500],
            opacity: 1,
          },
      }),
      multiline: {
        height: 'auto',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: () => ({
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: fontWeight.bold,
      }),

      containedPrimary: ({ theme }) => ({
        boxShadow: `0px 0px 12px 0px  ${alpha(theme.palette.primary.main, 0.5)}`,
        ['&:hover']: {
          backgroundColor: alpha(theme.palette.primary.main, 0.8),
        },
        ['&:active']: {
          backgroundColor: alpha(theme.palette.primary.main, 0.9),
        },
      }),
      outlinedSecondary: () => ({
        '--variant-outlinedColor': '#010101',
        borderColor: 'black',
      }),
      sizeSmall: {
        minHeight: '43px',
        paddingInline: '20px',
        fontSize: '16px',
      },
      sizeMedium: {
        minHeight: '48px',
        paddingInline: '24px',
        fontSize: '16px',
      },
      sizeLarge: () => ({
        minHeight: '64px',
        paddingInline: '32px',
        fontSize: '20px',
      }),
    },
    defaultProps: {
      size: 'medium',
      variant: 'contained',
      color: 'primary',
    },
  },
};

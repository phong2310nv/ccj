import '@mui/material/Button';
import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
  interface Components {
    MuiButton?: {
      styleOverrides?: Partial<Record<string, import('@mui/system').CSSInterpolation>>;
    };
  }
}

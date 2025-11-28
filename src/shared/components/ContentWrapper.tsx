import { Box, BoxProps } from '@mui/material';
import React from 'react';
type ContentWrapperProps = {
  children?: React.ReactNode;
} & BoxProps;
function ContentWrapper({ children, ...rest }: ContentWrapperProps) {
  return (
    <Box px={5} maxWidth='1320px' mx='auto' {...rest}>
      {children}
    </Box>
  );
}

export default ContentWrapper;

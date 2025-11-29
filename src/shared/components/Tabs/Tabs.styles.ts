import { Box, styled } from '@mui/material';
import { fontWeight } from '@styles';

export const TabWrapperStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: 'fit-content',
  padding: '8px',
  borderRadius: '500px',
  '& .MuiTabs-root ': {
    minHeight: 'auto',
  },
  '& .MuiButtonBase-root': {
    borderRadius: '500px',
    padding: '10px 20px',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: theme.palette.text.primary,
    fontWeight: fontWeight.medium,
    minHeight: '54px',
    fontSize: '24px',
    lineHeight: '140%',
    textTransform: 'none',
    '&.Mui-selected': {
      color: 'white',
    },
    '&.Mui-disabled': {
      color: '#8E8E8E',
      paddingBlock: '0',
    },
  },
  '& .MuiTabs-flexContainer': {
    zIndex: 10,
    position: 'relative',
    backgroundColor: 'transparent',
    gap: '8px',
  },
  '& .MuiTabs-indicator': {
    height: '100%',
    zIndex: 5,
    borderRadius: '500px',
  },
  ['&:has(.MuiTabs-flexContainerVertical) ']: {
    borderRadius: '36px',
    '& .MuiTabs-indicator': {
      width: '100%',
      zIndex: 5,
      borderRadius: '500px',
    },
  },
}));

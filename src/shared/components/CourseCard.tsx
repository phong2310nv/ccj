import { Box } from '@mui/material';
import { fontWeight } from '@styles';
import React from 'react';
type CourseCardProps = {
  isHot?: boolean;
  children?: React.ReactNode;
};
function CourseCard({ isHot, children }: CourseCardProps) {
  return (
    <Box
      sx={{
        boxShadow: '0px 0px 20px 0px #0000001A',
        borderRadius: '36px',
        padding: '60px 16px 60px 16px',
        backgroundColor: '#FFFFFF',
        ...(isHot && {
          border: '2px solid #FF9100',
          position: 'relative',
        }),
      }}
    >
      {children}
      {isHot && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            fontWeight: fontWeight.medium,
            fontSize: '16px',
            background: '#FF9100',
            color: 'white',
            padding: '8px 16px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            left: '50%',
            transform: 'translateX(-50%)',

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '0',
              right: '99%',
              width: '0',
              height: '0',
              borderWidth: '0 10px 34px 0',
              borderStyle: 'solid',
              borderColor: 'transparent #FF9100 transparent transparent',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '99%',
              width: '0',
              height: '0',
              borderWidth: '34px 10px 0 0',
              borderStyle: 'solid',
              borderColor: '#FF9100 transparent transparent transparent',
              transform: 'rotateY(0deg)',
            },
          }}
        >
          Phổ biến nhất
        </Box>
      )}
    </Box>
  );
}

export default CourseCard;

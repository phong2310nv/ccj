import { Box, Stack, Typography } from '@mui/material';
import { fontWeight } from '@styles';
import React from 'react';

type TargetCardProps = {
  icon: React.ReactNode;
  value: string;
  description: string;
};

function TargetCard({ icon, value, description }: TargetCardProps) {
  return (
    <Box
      sx={{
        background: '#20344D',
        borderRadius: '16px',
      }}
      padding={{
        xs: 8,
        md: 7,
        lg: 8,
      }}
    >
      <Stack direction='row' gap={3} alignItems='center'>
        <Box
          sx={{
            borderRadius: '10px',
            background: 'white',
            display: 'grid',
            placeItems: 'center',
            width: '64px',
            aspectRatio: '1 / 1',
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            lineHeight='110%'
            fontSize='40px'
            color='white'
            fontWeight={fontWeight.bold}
            mb={1}
          >
            {value}
          </Typography>
          <Typography
            lineHeight='110%'
            fontSize='17px'
            color='#C7C7C7'
            fontWeight={fontWeight.medium}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default TargetCard;

'use client';
import { Box, Collapse, IconButton, Stack, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@styles';
import { ReactNode, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
type Faq = {
  question: string;
  answer: ReactNode;
};
type FaqItemProps = {
  item: Faq;
};
function FaqItem({ item }: FaqItemProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box bgcolor='white' px={6} py={5} borderRadius={2}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        gap={2}
        onClick={() => setExpanded(!expanded)}
      >
        <Typography
          fontSize={fontSize.xl}
          color='#0D1E33'
          lineHeight='120%'
          fontWeight={fontWeight.bold}
        >
          {item.question}
        </Typography>
        <IconButton
          sx={{
            flexShrink: 0,
          }}
        >
          <KeyboardArrowUpIcon
            sx={theme => ({
              rotate: expanded ? '0deg' : '180deg',
              transition: 'all 0.3s ease',
              color: theme.palette.primary.main,
            })}
          />
        </IconButton>
      </Stack>
      <Collapse in={expanded}>
        <Box
          pt='18px'
          sx={{
            color: 'rgba(60, 60, 67, 0.85)',
            ['& *']: {
              color: 'inherit',
              lineHeight: '140%',
              fontSize: fontSize.lg,
            },
            ['& ul, & ol']: {
              margin: 0,
              paddingLeft: '32px',
            },
            ['& .MuiTypography-root']: {
              marginBottom: '8px',
            },
          }}
        >
          {item.answer}
        </Box>
      </Collapse>
    </Box>
  );
}

export default FaqItem;

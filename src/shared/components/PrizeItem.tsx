import { Box, Stack, StackProps, styled, Typography } from '@mui/material';
import React from 'react';
import PrizeIcon from '@icons/prize.svg';
import { fontSize, fontWeight } from '@styles';
type PrizeItemProps = {
  content: string;
  isSpecial?: boolean;
} & StackProps;

const PrizeItemStyled = styled(
  (props: StackProps) => <Stack direction='row' alignItems='center' gap={2} {...props} />,
  { shouldForwardProp: prop => prop !== '$isSpecial' },
)<{ $isSpecial?: boolean }>(({ theme, $isSpecial }) => ({
  minHeight: '88px',
  boxShadow: '0px 0px 12px 0px #00000026',
  background: 'white',
  padding: '8px 25px 8px 8px',
  maxWidth: '380px',
  borderRadius: '1.40282e38px',
  ...($isSpecial ? { background: theme.palette.primary.main } : {}),
  [theme.breakpoints.down('md')]: {},
  ['& .icon-container']: {
    flexShrink: 0,
    aspectRatio: '1 / 1',
    width: '72px',
    borderRadius: '100%',
    background: '#20344D',
    color: 'white',
    display: 'grid',
    placeItems: 'center',
    ...($isSpecial ? { background: 'white', color: theme.palette.primary.main } : {}),
  },
  ['&:nth-of-type(even)']: {
    marginLeft: 'auto',
  },
  ['&:nth-of-type(2),&:nth-of-type(6)']: {
    marginRight: '60px',
  },
  ['&:nth-of-type(1),&:nth-of-type(5)']: {
    marginLeft: '60px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 !important',
    maxWidth: 'unset',
  },
}));

function PrizeItem({ content, isSpecial, ...rest }: PrizeItemProps) {
  return (
    <PrizeItemStyled $isSpecial={isSpecial} {...rest}>
      <Box className='icon-container'>
        <PrizeIcon />
      </Box>
      <Typography
        lineHeight='130%'
        fontSize={fontSize.xl}
        fontWeight={fontWeight.medium}
        className='content'
        color={isSpecial ? 'white' : '#20344D'}
      >
        {content}
      </Typography>
    </PrizeItemStyled>
  );
}

export default PrizeItem;

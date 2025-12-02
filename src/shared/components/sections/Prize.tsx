'use client';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import PrizeItem from '../PrizeItem';
import Image from 'next/image';
import PrizeGirl from '@images/prize_girl.png';

function Prize() {
  return (
    <Box
      pt='83px'
      bgcolor='#F4FBFF'
      sx={{
        backgroundImage: 'url("/assets/images/prize_bg.png")',
      }}
      id='benefits'
    >
      <ContentWrapper position='relative' pb='160px'>
        <Typography
          variant='h2'
          textAlign='center'
          maxWidth='950px'
          mx='auto'
          textTransform='uppercase'
          mb='135px'
        >
          Lợi ích bạn đạt được khi sở hữu chứng chỉ{' '}
          <Box component='span' sx={theme => ({ color: theme.palette.primary.main })}>
            建築施工管理技士
          </Box>
        </Typography>
        <Box
          sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            [theme.breakpoints.down('md')]: {
              gap: '24px 10px',
            },
            [theme.breakpoints.down('sm')]: {
              gridTemplateColumns: '1fr',
              gap: '10px',
            },
          })}
        >
          <PrizeItem isSpecial content='Được công nhận năng lực thi công tại Nhật.' />
          <PrizeItem content='Được tin tưởng, giao trách nhiệm tại công trường.' />
          <PrizeItem content='Có thể quản lý công trình quy mô vừa và nhỏ.' />
          <PrizeItem content='Là bước đệm để thi lên chứng chỉ cấp 1.' />
          <PrizeItem content='Dễ dàng xin việc và tăng thu nhập ổn định hơn.' />
          <PrizeItem content='Hỗ trợ gia hạn và xét duyệt visa kỹ sư tại Nhật.' />
        </Box>
        <Stack
          alignItems='center'
          sx={theme => ({
            left: '50%',
            bottom: -30,
            transform: 'none',
            position: 'static',
            [theme.breakpoints.up('lg')]: {
              transform: 'translateX(-48%)',
              position: 'absolute',
            },
          })}
        >
          <Image alt='Prize' src={PrizeGirl} width={700} />
          <Box
            sx={{
              display: 'inline-block',
              background: '#153345',
              color: 'white',
              border: '5px solid white',
              borderRadius: '1.40282e38px',
              padding: '9px 12px',
              position: 'absolute',
              bottom: '40px',
            }}
          >
            1級建築施工管理技士
          </Box>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default Prize;

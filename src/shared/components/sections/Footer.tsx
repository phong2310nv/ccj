'use client';
import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@styles';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import IconFb from '@images/icon-fb.svg';
import IconTiktok from '@images/icon-tiktok.svg';
import IconIg from '@images/icon-instagram.svg';
import IconX from '@images/icon-x.svg';
import IconYt from '@images/icon-youtube.svg';
function Footer() {
  return (
    <Box
      component='footer'
      bgcolor='#153345'
      color='white'
      sx={{
        ['& *']: {
          color: 'inherit !important',
        },
      }}
    >
      <Box
        py={{
          xs: 10,
          md: 20,
        }}
        px={5}
        maxWidth={1000}
        mx='auto'
      >
        <Typography fontSize='32px' textAlign='center' fontWeight={fontWeight.bold} mb={2}>
          KENCHIKUNOKAZE
        </Typography>
        <Typography fontSize='16px' textAlign='center' mb={3}>
          kenchikunokaze.com là website luyện đề thuộc trung tâm CCJ, trang web luyện thi chứng chỉ
          đầu tiên cho người Việt tại Nhật
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          justifyContent='space-evenly'
          gap={4}
          alignItems='center'
          fontSize={14}
        >
          <Stack direction='row' alignItems='center' gap={2}>
            <MailOutlineIcon /> Email: info@kenchikunokaze.co.jp
          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>
            <LanguageIcon /> Website: www.kenchikunokaze.com
          </Stack>
        </Stack>
      </Box>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        gap={4}
        alignItems='center'
        textAlign='center'
        justifyContent='space-between'
        py={8}
        px={{
          xs: 10,
          md: 20,
        }}
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
        }}
      >
        <Typography fontSize={fontSize.base}>
          © 2025 Toàn bộ bản quyền thuộc KENCHIKUNOKAZE
        </Typography>
        <Stack direction='row' alignItems='center' gap={4}>
          <SvgIcon component={IconFb} />
          <SvgIcon component={IconTiktok} />
          <SvgIcon component={IconIg} />
          <SvgIcon component={IconYt} />
          <SvgIcon component={IconX} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;

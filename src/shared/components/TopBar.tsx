'use client';
import Logo from '@images/logo.png';
import { Box, Button, Link, Stack, styled } from '@mui/material';
import { LinkItems } from '@shared/constant';
import { fontWeight } from '@styles';
import Image from 'next/image';
import ContentWrapper from './ContentWrapper';
import DrawerMenu from './DrawerMenu';

const TopLinkStyled = styled(Link)(() => ({
  fontWeight: fontWeight.medium,
  color: '#333333',
  textDecorationColor: 'currentColor',
  textUnderlineOffset: '6px',
}));

function TopBar() {
  return (
    <Box component='header' bgcolor='#F4FBFF' py={5} position='sticky' zIndex={100} top={0}>
      <ContentWrapper>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Image width={48} height={48} src={Logo} alt='Logo' />
          <Stack direction='row' gap={5} display={{ xs: 'none', lg: 'block' }}>
            {LinkItems.map(item => (
              <TopLinkStyled
                key={item.title}
                href={item.href}
                underline='always'
                sx={theme => ({ color: item.isSpecial ? theme.palette.primary.main : '#333333' })}
              >
                {item.title}
              </TopLinkStyled>
            ))}
          </Stack>

          <Stack direction='row' gap={6} alignItems='center'>
            <Box
              gap={2}
              display={{
                xs: 'none',
                sm: 'flex',
              }}
            >
              <Button variant='outlined'>Luyện đề ngay</Button>
              <Button>Đăng kí khóa học</Button>
            </Box>
            <DrawerMenu />
          </Stack>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default TopBar;

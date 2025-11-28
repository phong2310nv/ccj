'use client';
import Logo from '@images/logo.png';
import { Box, Button, Link, Stack, styled } from '@mui/material';
import { fontWeight } from '@styles';
import Image from 'next/image';
import ContentWrapper from './ContentWrapper';

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
          <Stack direction='row' gap={5}>
            <TopLinkStyled
              href='#'
              underline='always'
              sx={theme => ({ color: theme.palette.primary.main })}
            >
              Trang chủ
            </TopLinkStyled>
            <TopLinkStyled href='#' underline='hover'>
              Vì sao nên học chứng chỉ
            </TopLinkStyled>
            <TopLinkStyled href='#' underline='hover'>
              Khóa học
            </TopLinkStyled>
            <TopLinkStyled href='#' underline='hover'>
              Về Giảng Viên
            </TopLinkStyled>
            <TopLinkStyled href='#' underline='hover'>
              Câu Hỏi Thường Gặp{' '}
            </TopLinkStyled>
          </Stack>
          <Stack direction='row' gap={2}>
            <Button variant='outlined'>Luyện đề ngay</Button>
            <Button>Đăng kí khóa học</Button>
          </Stack>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default TopBar;

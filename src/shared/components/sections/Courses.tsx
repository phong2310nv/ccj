'use client';
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import Tabs from '../Tabs';
import { fontWeight } from '@styles';
import CourseBlock from '../CourseBlock';
import { useDeviceSize } from '@shared/hooks/useDeviceSize';

function Courses() {
  const theme = useTheme();
  const { isMobile } = useDeviceSize();
  return (
    <Box pt='50px' pb='80px' bgcolor='#F4FBFF'>
      <ContentWrapper>
        <Typography
          variant='h2'
          textAlign='center'
          maxWidth='1200px'
          mx='auto'
          mb={4}
          whiteSpace='pre-line'
        >
          Đầu Tư Xứng Đáng{'\n'}Cho Mục Tiêu Chứng Chỉ{' '}
          <Box component='span' color={theme.palette.primary.main}>
            建築施工管理技士
          </Box>
        </Typography>
        <Typography
          variant='subtitle1'
          color='#475569'
          textAlign='center'
          maxWidth='976px'
          mx='auto'
          mb={10}
        >
          Chọn hình thức học phù hợp nhất – học online, offline hoặc video trọn bộ, tất cả đều có hỗ
          trợ giảng viên.
        </Typography>
        <Stack direction='row' gap={6} justifyContent='center' mb={6}>
          <Button
            disableRipple
            variant='text'
            size='small'
            sx={{
              p: 0,
              color: '#0D1E33',
              fontSize: '24px',
              fontWeight: fontWeight.semibold,
              textUnderlineOffset: '6px',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              ['&:hover']: { backgroundColor: 'transparent', textDecoration: 'underline' },
            }}
          >
            Khóa học 建築施工管理技士
          </Button>
          <Button
            disableRipple
            variant='text'
            size='small'
            sx={{
              p: 0,
              color: '#8E8E8E',
              fontSize: '24px',
              fontWeight: fontWeight.semibold,
              textUnderlineOffset: '6px',
              textTransform: 'uppercase',
              ['&:hover']: { backgroundColor: 'transparent', textDecoration: 'underline' },
            }}
          >
            Các khóa học khác
          </Button>
        </Stack>
        <Stack direction='row' justifyContent='center' mb={10}>
          <Tabs
            orientation={isMobile ? 'vertical' : 'horizontal'}
            value='online'
            options={[
              { value: 'online', label: 'Trực tuyến' },
              { value: 'web', label: 'Luyện đề trên Web' },
              {
                value: 'video',
                label: (
                  <Box>
                    <Box>Video </Box>
                    <Box fontSize='14px' lineHeight='20px'>
                      (Sắp ra mắt)
                    </Box>
                  </Box>
                ),
                disabled: true,
              },
            ]}
          />
        </Stack>
        <CourseBlock />
      </ContentWrapper>
    </Box>
  );
}

export default Courses;

'use client';
import GroupIcon from '@icons/group.svg';
import OfficeIcon from '@icons/office-man.svg';
import TargetIcon from '@icons/target.svg';
import HeroImage from '@images/hero.png';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { useDeviceSize } from '@shared/hooks/useDeviceSize';
import { fontWeight } from '@styles';
import Image from 'next/image';
import ContentWrapper from '../ContentWrapper';
import TargetCard from '../TargetCard';

function Header() {
  const theme = useTheme();
  const { isTablet } = useDeviceSize();
  return (
    <Box bgcolor='#F4FBFF'>
      <ContentWrapper
        position='relative'
        pt={{
          xs: '40px',
          md: '60px',
          lg: '120px',
        }}
        overflow='hidden'
      >
        <Box
          maxWidth='55%'
          mb={{
            xs: '41px',
            md: '60px',
            lg: '100px',
          }}
          position='relative'
          zIndex={10}
        >
          <Typography variant='h1' mb={4} textTransform='uppercase'>
            Khoá học{' '}
            <Box component='span' sx={{ color: theme.palette.primary.main }}>
              建築施工管理技士
            </Box>{' '}
            cho kỹ sư Việt tại nhật
          </Typography>
          <Typography
            mb={9}
            variant='body1'
            fontSize='22px'
            fontWeight={fontWeight.medium}
            color='#333333'
            lineHeight='130%'
          >
            Khóa học được thiết kế dành riêng cho những bạn đang sinh sống, học tập và làm việc tại
            Nhật Bản — giúp bạn nắm vững kiến thức nền tảng trong ngành xây dựng, tự tin chinh phục
            kỳ thi chứng chỉ thi công xây dựng Nhật.
          </Typography>
          <Button size='large' sx={{ height: '64px', paddingInline: '32px', borderRadius: '16px' }}>
            Tư vấn, hỗ trợ viết hồ sơ miễn phí
          </Button>
        </Box>
        <Image
          width={isTablet ? 672 : 734}
          src={HeroImage}
          alt='Hero'
          objectFit='contain'
          style={{
            position: 'absolute',
            top: isTablet ? 80 : 73,
            right: isTablet ? -140 : 20,
          }}
        />
        <Stack
          position='relative'
          zIndex={10}
          justifyContent='center'
          direction='row'
          gap='10px'
          flexWrap='wrap'
          sx={{
            ['& > *']: {
              flex: 1,
              minWidth: '360px',
              maxWidth: isTablet ? '380px' : undefined,
            },
          }}
        >
          <TargetCard
            icon={<TargetIcon />}
            value='70%'
            description='Học viên đỗ 建築施工管理技士'
          />
          <TargetCard icon={<GroupIcon />} value='100+' description='Học viên đã tham gia' />
          <TargetCard icon={<OfficeIcon />} value='3 năm +' description='Kinh nghiệm giảng dạy' />
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default Header;

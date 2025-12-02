'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import InstructorCard, { InstructorType } from '../InstructorCard';
import ContentWrapper from '../ContentWrapper';

const instructors: InstructorType[] = [
  {
    name: 'Khương Lập Phong',
    image: '/assets/images/instructor_phong.jpg',
    position: 'Thành viên sáng lập',
    bio: [
      'Đại học Xây dựng Hà Nội',
      '１級建築施工管理技士',
      '１級土木施工管理技士',
      '２級建築施工管理技士',
      'Graphisoft BIM Manager',
      '8 năm kinh nghiệm quản lý thi công công trình tại Nhật',
    ],
  },
  {
    name: 'Phùng Tuấn Đạt',
    image: '/assets/images/instructor_dat.jpg',
    position: 'Thành viên sáng lập',
    bio: [
      'Tốt nghiệp thạc sĩ Đại học Tokyo University of Science (học bổng MEXT).',
      'Chứng chỉ １級建築施工管理技士',
      'Chứng chỉ コンクリート技士 ... その他',
      '7 năm kinh nghiệm quản lý thi công công trình tại Nhật',
    ],
  },
  {
    name: 'Nguyễn Minh Nhật',
    image: '/assets/images/instructor_nhat.jpg',
    position: 'Thành viên sáng lập',
    bio: [
      'ĐẠI HỌC BÁCH KHOA TPHCM',
      'Chứng chỉ １級建築施工管理技士',
      'Chứng chỉ ２級建築施工管理技士補',
      'Trên 8 năm kinh nghiệm quản lý thi công công trình tại Nhật',
      'Từng giữ chức vụ chỉ huy trưởng công trình',
    ],
  },
];

function Instructor() {
  return (
    <Box
      id='instructors'
      bgcolor='#F4FBFF'
      py={{
        xs: 10,
        lg: 20,
      }}
      sx={{
        ['& .swiper-slide ']: {
          maxWidth: 410,
        },
      }}
    >
      <ContentWrapper>
        <Typography variant='h2' textAlign='center' textTransform='uppercase' mb={10}>
          Đội ngũ giảng viên giàu kinh nghiệm{' '}
        </Typography>
        <Swiper
          className='instructor-swiper'
          modules={[Pagination]}
          spaceBetween={25}
          slidesPerView='auto'
          pagination={{ clickable: true }}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          style={{
            // padding: '20px 20px 50px 20px',
            paddingBottom: 50,
            alignItems: 'stretch',
          }}
          breakpoints={{
            600: {
              spaceBetween: 25,
              slidesPerView: 'auto',
            },
            1440: {
              spaceBetween: 25,
              slidesPerView: 3,
            },
          }}
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <InstructorCard instructor={instructor} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack direction='row' justifyContent='center' mt={4}>
          <Button
            fullWidth
            size='large'
            sx={theme => ({
              maxWidth: '560px',
              borderRadius: '28px',
              minHeight: '84px',
              fontSize: '28px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '20px',
                minHeight: '64px',
                borderRadius: '16px',
              },
            })}
          >
            Đăng ký sớm nhận ưu đãi
          </Button>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default Instructor;

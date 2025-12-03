import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './CourseCard';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { registerLink } from '@shared/constant';

const courses = [
  {
    title: '１級建築施工管理技士',
    rank: '１次',
    subTitle: 'Lộ trình chuẩn Nhật giúp kỹ sư Việt tự tin vượt qua bất kỳ thời điểm nào.',
    details: [
      '📘 ~14 buổi học (chủ nhật hằng tuần qua ZOOM).',
      '🧱 Giảng dạy theo từng chủ đề trọng tâm.',
      '💻 Tặng tài khoản luyện đề trực tuyến.',
      '📝 Hỗ trợ đăng ký kỳ thi chính thức.',
      '🤝 Hỗ trợ ngoài giờ học.',
    ],
    salePrice: '¥59.000',
    originalPrice: '¥62.000',
    isHot: false,
  },
  {
    title: '２級建築施工管理技士',
    rank: '１次',
    subTitle: 'Luyện lý thuyết, nắm chắc kiến thức và quy định thi công tại Nhật.',
    details: [
      '📘 ~13 buổi học (chủ nhật hằng tuần qua ZOOM).',
      '🧱 Giảng dạy theo từng chủ đề trọng tâm.',
      '💻 Tặng tài khoản luyện đề trực tuyến.',
      '📝 Hỗ trợ đăng ký kỳ thi chính thức.',
      '🤝 Hỗ trợ ngoài giờ học.',
    ],
    salePrice: '¥48.000',
    originalPrice: '¥45.000',
    isHot: true,
  },
  {
    title: '２級建築施工管理技士',
    rank: '2次',
    subTitle: 'Luyện viết báo cáo, xử lý tình huống và nâng cao kỹ năng thực hành.',
    details: [
      '📘 ~8 buổi học (chủ nhật hằng tuần qua ZOOM).',
      '🧱 Giảng dạy theo từng chủ đề trọng tâm.',
      '💻 Tặng tài khoản luyện đề trực tuyến.',
      '📝 Hỗ trợ đăng ký kỳ thi chính thức.',
      '🤝 Hỗ trợ ngoài giờ học.',
    ],
    salePrice: '¥33.000',
    originalPrice: '¥39.000',
    isHot: false,
  },
  {
    title: '１級建築施工管理技士',
    rank: '2次',
    subTitle: 'Phân tích đề thi, rèn kỹ năng quản lý và đạt chứng chỉ cấp cao.',
    details: [
      '📘 ~8 buổi học (chủ nhật hằng tuần qua ZOOM).',
      '🧱 Giảng dạy theo từng chủ đề trọng tâm.',
      '💻 Tặng tài khoản luyện đề trực tuyến.',
      '📝 Hỗ trợ đăng ký kỳ thi chính thức.',
      '🤝 Hỗ trợ ngoài giờ học.',
    ],
    salePrice: '¥49.000',
    originalPrice: '¥52.000',
    isHot: false,
  },
];

function CourseBlock() {
  return (
    <Box
      sx={theme => ({
        ['& .swiper-pagination']: {
          bottom: '0',
          ['& .swiper-pagination-bullet-active']: {
            background: '#0D1E33',
          },
        },
        ['& .course-swiper-wrapper']: {
          marginInline: 'auto',
        },
        [theme.breakpoints.down('lg')]: {
          ['& .course-swiper-wrapper']: {
            width: 'calc(305px * 2 + 20px * 1 + 40px)',
          },
        },
        [theme.breakpoints.down('sm')]: {
          ['& .course-swiper-wrapper']: {
            width: 'calc(305px * 1 + 20px * 0 + 40px)',
          },
        },
        [theme.breakpoints.down('md')]: {
          marginInline: '-20px',
        },
        ['& .course-swiper']: {
          padding: '20px 15px 50px 15px',
        },
      })}
    >
      <Box
        position='relative'
        className='course-swiper-wrapper'
        overflow='visible'
        mx='auto'
        maxWidth={{
          sm: 'none',
          xs: 'none',
          md: '70%',
          lg: 'none',
          xl: 'none',
        }}
      >
        <Swiper
          className='course-swiper'
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          initialSlide={1}
          navigation={{
            //   addIcons: true,
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            enabled: true,
            hideOnClick: true,
          }}
          breakpoints={{
            600: {
              spaceBetween: 50,
              slidesPerView: 2,
            },
            1440: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} style={{ width: '305px' }}>
              <CourseCard isHot={course.isHot}>
                <Stack
                  py={1}
                  direction='row'
                  justifyContent='space-between'
                  fontSize={20}
                  lineHeight='130%'
                  fontWeight={fontWeight.bold}
                  mb={1}
                >
                  <Box>{course.title}</Box>
                  <Box>{course.rank}</Box>
                </Stack>
                <Typography
                  variant='body1'
                  fontSize={fontSize.sm}
                  lineHeight='130%'
                  fontWeight={fontWeight.medium}
                  mb={6}
                  color='#5B5B5B'
                  py={1}
                >
                  {course.subTitle}
                </Typography>
                <Typography
                  variant='body1'
                  fontSize={fontSize.base}
                  lineHeight='130%'
                  fontWeight={fontWeight.semibold}
                  mb={1}
                  color='#0D1E33'
                >
                  Khóa học bao gồm:
                </Typography>
                {course.details.map((detail, detailIndex) => (
                  <Typography
                    py={1}
                    key={detailIndex}
                    variant='body2'
                    fontSize={fontSize.sm}
                    lineHeight='130%'
                    fontWeight={fontWeight.medium}
                    color='#5B5B5B'
                  >
                    {detail}
                  </Typography>
                ))}
                <Box height='2px' bgcolor='#5B5B5B' my={5} />
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Box>
                    <Typography
                      sx={theme => ({
                        fontSize: '24px',
                        fontWeight: fontWeight.bold,
                        lineHeight: '130%',
                        color: theme.palette.primary.main,
                      })}
                    >
                      {course.salePrice}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: fontWeight.medium,
                        lineHeight: '130%',
                        color: '#5B5B5B',
                        textDecoration: 'line-through',
                      }}
                    >
                      {course.originalPrice}
                    </Typography>
                  </Box>
                  <Button
                    href={registerLink}
                    size='small'
                    variant={course.isHot ? 'contained' : 'outlined'}
                    color={course.isHot ? 'primary' : 'secondary'}
                  >
                    Đăng kí ngay
                  </Button>
                </Stack>
              </CourseCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack
          direction='row'
          justifyContent={{
            xs: 'center',
            sm: 'space-between',
          }}
          gap='100px'
          sx={theme => ({
            position: 'absolute',
            top: '50%',
            width: '110%',
            left: '-5%',
            transform: 'translateY(-100%)',
            zIndex: 10,
            [theme.breakpoints.down('sm')]: {
              transform: 'translateY(-70%)',
              top: '100%',
              width: '100%',
              left: '0',
            },
          })}
        >
          <IconButton
            aria-label='pre'
            size='small'
            className='swiper-button-prev'
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
              color: 'white',
              ['&.swiper-button-disabled']: {
                visibility: 'hidden',
              },
            }}
          >
            <ChevronLeftIcon fontSize='inherit' />
          </IconButton>

          <IconButton
            aria-label='next'
            size='small'
            className='swiper-button-next'
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
              color: 'white',
              ['&.swiper-button-disabled']: {
                visibility: 'hidden',
              },
            }}
          >
            <ChevronRightIcon fontSize='inherit' />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default CourseBlock;

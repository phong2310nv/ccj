'use client';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentWrapper from '../ContentWrapper';
import NewsItemCard, { NewItem } from '../NewItemCard';

const newsItems: NewItem[] = [
  {
    image: '/assets/images/news-img.png',
    title: 'Chiến dịch giới thiệu kiến ​​trúc sư',
    description:
      'Công ty TNHH Nghiên cứu Vật liệu Kiến trúc (Trụ sở chính: Toshima-ku, Tokyo; Chủ tịch kiêm Tổng Giám đốc Điều hành: Eiichi Baba), đơn vị điều hành trường hỗ trợ chứng chỉ Nikken Academy, đang triển khai "Chiến dịch Giới thiệu Kiến trúc sư" dành cho những người tham gia kỳ thi lý thuyết kiến ​​trúc, thiết kế và vẽ kỹ thuật. Nếu người được bạn giới thiệu đăng ký khóa học kiến ​​trúc hạng 1 hoặc hạng 2 (lý thuyết, thiết kế và vẽ kỹ thuật), cả người giới thiệu và người đăng ký đều sẽ nhận được ưu đãi đặc biệt.',
    link: '/news/1',
  },
  {
    image: '/assets/images/news-img.png',
    title: 'Chiến dịch giới thiệu kiến ​​trúc sư',
    description:
      'Công ty TNHH Nghiên cứu Vật liệu Kiến trúc (Trụ sở chính: Toshima-ku, Tokyo; Chủ tịch kiêm Tổng Giám đốc Điều hành: Eiichi Baba), đơn vị điều hành trường hỗ trợ chứng chỉ Nikken Academy, đang triển khai "Chiến dịch Giới thiệu Kiến trúc sư" dành cho những người tham gia kỳ thi lý thuyết kiến ​​trúc, thiết kế và vẽ kỹ thuật. Nếu người được bạn giới thiệu đăng ký khóa học kiến ​​trúc hạng 1 hoặc hạng 2 (lý thuyết, thiết kế và vẽ kỹ thuật), cả người giới thiệu và người đăng ký đều sẽ nhận được ưu đãi đặc biệt.',
    link: '/news/1',
  },
  {
    image: '/assets/images/news-img.png',
    title: 'Chiến dịch giới thiệu kiến ​​trúc sư',
    description:
      'Công ty TNHH Nghiên cứu Vật liệu Kiến trúc (Trụ sở chính: Toshima-ku, Tokyo; Chủ tịch kiêm Tổng Giám đốc Điều hành: Eiichi Baba), đơn vị điều hành trường hỗ trợ chứng chỉ Nikken Academy, đang triển khai "Chiến dịch Giới thiệu Kiến trúc sư" dành cho những người tham gia kỳ thi lý thuyết kiến ​​trúc, thiết kế và vẽ kỹ thuật. Nếu người được bạn giới thiệu đăng ký khóa học kiến ​​trúc hạng 1 hoặc hạng 2 (lý thuyết, thiết kế và vẽ kỹ thuật), cả người giới thiệu và người đăng ký đều sẽ nhận được ưu đãi đặc biệt.',
    link: '/news/1',
  },
];

function News() {
  return (
    <Box
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
          Tin tức nổi bật
        </Typography>
        <Swiper
          className='instructor-swiper'
          modules={[Pagination]}
          spaceBetween={45}
          slidesPerView='auto'
          pagination={{ clickable: true }}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          style={{
            padding: '20px 50px 50px 50px',
            paddingBottom: 50,
            alignItems: 'stretch',
          }}
          breakpoints={{
            600: {
              spaceBetween: 45,
              slidesPerView: 'auto',
            },
            1440: {
              spaceBetween: 45,
              slidesPerView: 3,
            },
          }}
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <NewsItemCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentWrapper>
    </Box>
  );
}

export default News;

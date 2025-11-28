import { Box, Stack, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@styles';
import ContentWrapper from '../ContentWrapper';
const listItems = [
  {
    title: 'Hệ thống luyện thi trực tuyến',
    description: 'Luyện thi theo format thật – chấm điểm tự động – thống kê tiến độ',
  },
  {
    title: 'Chấm điểm tự động',
    description: 'Chấm điểm chính xác, nhanh chóng, theo tiêu chuẩn đề thi Nhật Bản.',
  },
  {
    title: 'Theo dõi tiến độ học tập',
    description: 'Tự động lưu kết quả, hiển thị biểu đồ tiến bộ sau mỗi bài luyện thi.',
  },
  {
    title: 'Làm bài giới hạn thời gian',
    description: 'Rèn luyện khả năng phản xạ và kiểm soát tốc độ làm bài – như trong kỳ thi thật.',
  },
];
function Gain() {
  return (
    <Box
      bgcolor='#F4FBFF'
      py={{
        xs: 10,
        lg: 20,
      }}
    >
      <ContentWrapper>
        <Stack
          direction={{
            xs: 'column',
            lg: 'row',
          }}
          alignItems={{
            xs: 'flex-start',
            lg: 'center',
          }}
          gap={{
            xs: 5,
            md: 10,
          }}
        >
          <Box
            flex='1'
            maxWidth={{
              xs: 'none',
              lg: '560px',
            }}
          >
            <Typography variant='h2' textTransform='uppercase' mb={4}>
              Bạn nhận được gì khi tham gia khóa học{' '}
              <Box component='span' color='#FF9100'>
                建築施工管理技士
              </Box>
            </Typography>
            <Typography variant='subtitle1'>
              CCJ giúp bạn biến hành trình ôn thi trở nên dễ dàng và hiệu quả hơn bao giờ hết.
            </Typography>
          </Box>
          <Box
            width={{
              xs: 'auto',
              lg: 2,
            }}
            height={{
              xs: 2,
              lg: 'auto',
            }}
            bgcolor='#153345'
            alignSelf='stretch'
          />
          <Stack gap={6} flex='1'>
            {listItems.map((item, index) => (
              <Box key={index}>
                <Typography
                  gutterBottom
                  variant='body1'
                  fontWeight={fontWeight.bold}
                  fontSize={fontSize['2xl']}
                  lineHeight='140%'
                  color='#153345'
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  fontWeight={fontWeight.medium}
                  fontSize={fontSize.base}
                  lineHeight='140%'
                  color='#6C6C6C'
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default Gain;

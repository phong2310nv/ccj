import { Box, Stack, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@styles';
import Image from 'next/image';
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
function Training() {
  return (
    <Box
      bgcolor='#153345'
      color='white'
      py={{
        xs: 10,
        lg: 20,
      }}
    >
      <ContentWrapper>
        <Typography
          variant='h2'
          color='inherit'
          textAlign='center'
          mb={4}
          textTransform='uppercase'
          maxWidth='1100px'
          mx='auto'
        >
          HỆ THỐNG LUYỆN THI TRỰC TUYẾN mọi lúc mọi nơi
        </Typography>
        <Typography
          variant='subtitle1'
          color='#E0E0E0'
          textAlign='center'
          maxWidth='976px'
          mx='auto'
          mb={12}
        >
          Luyện thi theo format thật – chấm điểm tự động – thống kê tiến độ
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            lg: 'row',
          }}
          alignItems={{
            xs: 'center',
            lg: 'stretch',
          }}
          gap={{
            xs: 5,
            md: 10,
          }}
        >
          <Stack
            gap={6}
            px={4}
            py={2.5}
            flex={{
              xs: '1',
              lg: '0 1 500px',
            }}
            border='1px solid white'
            borderRadius={2}
          >
            {listItems.map((item, index) => (
              <Box key={index}>
                <Typography
                  gutterBottom
                  variant='body1'
                  fontWeight={fontWeight.bold}
                  fontSize={fontSize['2xl']}
                  lineHeight='140%'
                  color='inherit'
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  fontWeight={fontWeight.medium}
                  fontSize={fontSize.base}
                  lineHeight='140%'
                  color='#E0E0E0'
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Box flex='1 1 0%'>
            <Image
              src='/assets/images/training.png'
              alt='Training System'
              width={600}
              height={400}
              style={{ width: 'auto', height: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Stack>
      </ContentWrapper>
    </Box>
  );
}

export default Training;

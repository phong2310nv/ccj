import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import Image from 'next/image';

function Feedback() {
  return (
    <Box py={{ xs: 10, md: 20 }} bgcolor='#F4FBFF'>
      <ContentWrapper
        sx={{
          ['& .feedback-item']: {
            border: '1px solid #153345',
            borderRadius: '16px',
            overflow: 'hidden',
          },
        }}
      >
        <Typography variant='h1' textTransform='uppercase' textAlign='center' mb={4}>
          học viên nói gì về CCJ
        </Typography>
        <Typography variant='subtitle1' color='#475569' textAlign='center' mb={12}>
          Những chia sẻ của các học viên CCJ đã đồng hành cùng
        </Typography>
        <Box overflow='auto'>
          <Grid container spacing={5} minWidth='1280px'>
            <Grid size={3} className='feedback-item' height='254px'>
              <Image
                src='/assets/images/feedback1.png'
                alt='Feedback 1'
                width={305}
                height={254}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid size={3} className='feedback-item' height='254px'>
              <Image
                src='/assets/images/feedback2.png'
                alt='Feedback 1'
                width={305}
                height={254}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid size={3} className='feedback-item' height='254px    '>
              <Image
                src='/assets/images/feedback3.png'
                alt='Feedback 1'
                width={305}
                height={254}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid size={3} className='feedback-item' height='254px'>
              <Image
                src='/assets/images/feedback4.png'
                alt='Feedback 1'
                width={305}
                height={254}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid size={4} spacing={5}>
              <Stack height='100%' direction='column' gap={5}>
                <Box className='feedback-item' flex='1 0 210px'>
                  <Image
                    src='/assets/images/feedback5.png'
                    alt='Feedback 5'
                    width={410}
                    height={210}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box className='feedback-item' flex='1 1 100%'>
                  <Image
                    src='/assets/images/feedback6.png'
                    alt='Feedback 6'
                    width={414}
                    height={436}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid size={4}>
              <Stack height='100%' direction='column' gap={5}>
                <Box className='feedback-item' flex='1 1 100%'>
                  <Image
                    src='/assets/images/feedback7.png'
                    alt='Feedback 7'
                    width={414}
                    height={356}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box className='feedback-item' flex='1 0 290px'>
                  <Image
                    src='/assets/images/feedback8.png'
                    alt='Feedback 8'
                    width={414}
                    height={290}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid size={4} className='feedback-item' height='665px'>
              <Image
                src='/assets/images/feedback9.png'
                alt='Feedback 9'
                width={414}
                height={665}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </ContentWrapper>
    </Box>
  );
}

export default Feedback;

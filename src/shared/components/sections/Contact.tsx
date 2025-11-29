'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import { fontWeight } from '@styles';
import { RHFForm, RHFTextField } from '../RHF';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

function Contact() {
  const methods = useForm();
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ContentWrapper>
      <Stack
        direction={{
          xs: 'column-reverse',
          md: 'row',
        }}
        overflow='hidden'
        bgcolor='white'
        borderRadius='20px'
        alignItems='center'
        gap={{
          xs: 5,
          md: 0,
        }}
        pt={{
          xs: 20,
          md: 0,
        }}
        px={8}
        sx={{ backgroundImage: 'url(/assets/images/contact-bg-img.png)' }}
      >
        <Box flex=' 0 1 100%' position='relative' height={600} display='flex' alignItems='flex-end'>
          <Box
            sx={theme => ({
              position: 'absolute',
              width: '780px',
              left: -120,
              bottom: -5,

              [theme.breakpoints.down('md')]: {
                position: 'static',
              },
            })}
          >
            <Image
              src='/assets/images/contact-couple.png'
              alt='Contact Image'
              width={758}
              height={525}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
        <Box flex='0 1 100%' maxWidth='600px'>
          <Typography
            variant='h2'
            textTransform='uppercase'
            fontWeight={fontWeight.bold}
            fontSize='52px'
            color='Đăng kí Tư vấn ngay'
            lineHeight='120%'
            mb={9}
          >
            Đăng kí Tư vấn ngay
          </Typography>
          <RHFForm {...methods} onSubmit={handleSubmit}>
            <RHFTextField name='fullName' placeholder='Họ và tên' wrapperProps={{ mb: 3 }} />
            <RHFTextField name='email' placeholder='Email' wrapperProps={{ mb: 3 }} />
            <RHFTextField name='phoneNumber' placeholder='Số điện thoại' wrapperProps={{ mb: 3 }} />
            <RHFTextField
              name='contactChannel'
              placeholder='Kênh liên lạc cá nhân(Facebook, Zalo, ...)'
              wrapperProps={{ mb: 8 }}
            />
            <Button fullWidth size='large'>
              Đăng kí ngay
            </Button>
          </RHFForm>
        </Box>
      </Stack>
    </ContentWrapper>
  );
}

export default Contact;

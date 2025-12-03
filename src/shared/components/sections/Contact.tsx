'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ContentWrapper from '../ContentWrapper';
import { fontWeight } from '@styles';
import { RHFForm, RHFTextField } from '../RHF';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { enqueueSnackbar } from 'notistack';

const contactSchema = object({
  name: string().trim().required('Vui lòng nhập họ và tên'),
  email: string().trim().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phoneNumber: string().optional(),
  socialLink: string().optional(),
});

type ContactFormValues = {
  name: string;
  email: string;
  phoneNumber?: string;
  socialLink?: string;
};

function Contact() {
  const methods = useForm<any>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      socialLink: '',
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = methods;

  const handleSubmit = async (data: ContactFormValues) => {
    const payload = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber || undefined,
      socialLink: data.socialLink || undefined,
    };
    try {
      const response = await fetch('https://kenchikunokaze.com/api/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      enqueueSnackbar('Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', {
        variant: 'success',
      });
      reset();
    } catch (error) {
      enqueueSnackbar('Gửi thông tin thất bại! Vui lòng thử lại sau.', {
        variant: 'error',
      });
    }
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
          <RHFForm<ContactFormValues> {...methods} onSubmit={handleSubmit}>
            <RHFTextField name='name' placeholder='Họ và tên' wrapperProps={{ mb: 3 }} />
            <RHFTextField name='email' placeholder='Email' wrapperProps={{ mb: 3 }} />
            <RHFTextField name='phoneNumber' placeholder='Số điện thoại' wrapperProps={{ mb: 3 }} />
            <RHFTextField
              name='socialLink'
              placeholder='Kênh liên lạc cá nhân(Facebook, Zalo, ...)'
              wrapperProps={{ mb: 8 }}
            />
            <Button fullWidth size='large' type='submit' loading={isSubmitting}>
              Đăng kí ngay
            </Button>
          </RHFForm>
        </Box>
      </Stack>
    </ContentWrapper>
  );
}

export default Contact;

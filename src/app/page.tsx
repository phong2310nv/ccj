import { Box, Button } from '@mui/material';
import Courses from '@shared/components/sections/Courses';
import Feedback from '@shared/components/sections/Feedback';
import Gain from '@shared/components/sections/Gain';
import Header from '@shared/components/sections/Header';
import Instructor from '@shared/components/sections/Instructor';
import News from '@shared/components/sections/News';
import Prize from '@shared/components/sections/Prize';
import Training from '@shared/components/sections/Training';
import TopBar from '@shared/components/TopBar';
import React from 'react';

function Home() {
  return (
    <Box>
      <TopBar />
      <Header />
      <main>
        <Prize />
        <Courses />
        <Training />
        <Gain />
        <Instructor />
        <Feedback />
        <News />
      </main>
      <Button>Đăng kí khóa học</Button>
      <Button variant='outlined'>Đăng kí khóa học</Button>
      <Button variant='outlined' color='secondary'>
        Đăng kí khóa học
      </Button>
    </Box>
  );
}

export default Home;

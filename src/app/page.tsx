import { Box, Button } from '@mui/material';
import Courses from '@shared/components/sections/Courses';
import Header from '@shared/components/sections/Header';
import Prize from '@shared/components/sections/Prize';
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

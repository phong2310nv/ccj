import { Box } from '@mui/material';
import Contact from '@shared/components/sections/Contact';
import Courses from '@shared/components/sections/Courses';
import Faq from '@shared/components/sections/Faq';
import Feedback from '@shared/components/sections/Feedback';
import Footer from '@shared/components/sections/Footer';
import Gain from '@shared/components/sections/Gain';
import Header from '@shared/components/sections/Header';
import Instructor from '@shared/components/sections/Instructor';
import News from '@shared/components/sections/News';
import Prize from '@shared/components/sections/Prize';
import Training from '@shared/components/sections/Training';
import TopBar from '@shared/components/TopBar';

function Home() {
  return (
    <Box bgcolor='#F4F9FF'>
      <TopBar />
      <Header />
      <Box component='main' overflow='hidden'>
        <Prize />
        <Courses />
        <Training />
        <Gain />
        <Instructor />
        <Feedback />
        <Contact />
        <News />
        <Faq />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;

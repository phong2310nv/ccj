import { Avatar, Box, Typography } from '@mui/material';
import { fontSize } from '@styles';
import React from 'react';
export type InstructorType = {
  name: string;
  image: string;
  position?: string;
  bio: string[];
};
type InstructorCardProps = {
  instructor: InstructorType;
};

function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Box bgcolor='#153345' color='white' p={4} borderRadius={2} height='100%'>
      <Avatar
        alt={instructor.name || 'Instructor Name'}
        src={instructor.image}
        sx={{ width: 139, height: 139 }}
      />
      <Typography
        color='inherit'
        fontWeight={600}
        fontSize={fontSize['2xl']}
        lineHeight='130%'
        mt={4}
        mb={1}
        textTransform='uppercase'
      >
        {instructor.name}
      </Typography>
      <Typography
        color='#D5D5D5'
        fontWeight={500}
        fontSize={fontSize.base}
        lineHeight='130%'
        textTransform='uppercase'
      >
        {instructor.position}
      </Typography>
      <Box height='1px' bgcolor='white' my={4} />
      <Box component='ul'>
        {instructor.bio.map((item, index) => (
          <Typography
            component='li'
            key={index}
            color='inherit'
            fontWeight={500}
            fontSize={fontSize.base}
            lineHeight='130%'
            mb={2}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default InstructorCard;

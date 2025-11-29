import { Box, Button, Typography } from '@mui/material';
import { fontWeight } from '@styles';
import Image from 'next/image';
export type NewItem = {
  image: string;
  title: string;
  description: string;
  link: string;
};
type NewsItemCardProps = {
  item: NewItem;
};

function NewsItemCard({ item }: NewsItemCardProps) {
  return (
    <Box
      overflow='hidden'
      borderRadius={2}
      height='100%'
      minHeight='565px'
      bgcolor='white'
      boxShadow='0px 0px 20px 0px #1E3D7040'
    >
      <Box>
        <Image
          width={353}
          height={250}
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
      </Box>
      <Box py={4} px='22px'>
        <Typography mb={4} variant='body1' fontWeight={fontWeight.semibold} fontSize={20}>
          {item.title}
        </Typography>
        <Typography
          variant='body1'
          fontSize={18}
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '140%',
          }}
          mb='18px'
        >
          {item.description}
        </Typography>
        <Button size='large' fullWidth>
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
}

export default NewsItemCard;

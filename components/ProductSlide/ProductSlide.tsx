import Image from 'next/image';
import Box from '@mui/material/Box';

import { ProductSlideProps } from '.';

export default function(props: ProductSlideProps) {
  return (
    <Box sx={{ mx: '5rem', my: '4rem' }}>
      <Image src={props.src} />
    </Box>
  );
}
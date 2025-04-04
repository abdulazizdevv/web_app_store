import { AspectRatio } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div>
      <AspectRatio ratio={3 / 1} maxH={'484px'}>
        <Image src={'/banner_web_app.png'} alt='pic' fill priority />
      </AspectRatio>
    </div>
  );
};

export default Banner;

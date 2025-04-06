'use client';
import { IProduct } from '@/types';
import { AspectRatio, Button, Card, HStack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductCard = ({ data }: { data?: IProduct }) => {
  const [imgSrc, setImgSrc] = useState(data?.images[0] || '/no_photo.svg');

  return (
    <Card.Root
      width='325px'
      minH={'500px'}
      p={0}
      border={'none'}
      bg={'#494544'}
      cursor={'pointer'}
      _hover={{
        boxShadow: '#2B282899',
      }}
    >
      <Card.Header
        p={0}
        roundedTopRight={8}
        roundedTopLeft={8}
        overflow={'hidden'}
      >
        <AspectRatio ratio={1} maxH={'325px'}>
          <Image
            src={imgSrc}
            alt='pic'
            fill
            loading='eager'
            priority
            onError={() => setImgSrc('/no_photo.svg')}
          />
        </AspectRatio>
      </Card.Header>
      <Card.Body gap='2'>
        <Card.Title mt='2' h={8} fontSize={22} lineClamp={2} color={'light'}>
          {data?.title}
        </Card.Title>
        <Card.Description h={16} fontSize={13} color={'gray.400'} lineClamp={3}>
          {data?.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer w={'full'}>
        <HStack w={'full'} justifyContent={'space-between'}>
          <Text fontWeight={600} fontSize={20} color={'light'}>
            {data?.price} ₽
          </Text>
          <Button bg={'primary'} rounded={10} size={'lg'}>
            В корзину
            <Icon
              icon='streamline:shopping-cart-subtract'
              width='24'
              height='24'
            />
          </Button>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;

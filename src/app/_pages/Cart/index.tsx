import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackSeparator,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Cart = () => {
  return (
    <Container mt={'34px'}>
      <Text color={'white'} alignItems={'end'} display={'flex'}>
        <Icon icon='lsicon:left-outline' width='24' height='24' />
        <Link href='/' color={'white'}>
          к выбору блюда
        </Link>
      </Text>
      <HStack my={'20px'} alignItems={'end'}>
        <Heading
          size='lg'
          fontSize={{ base: 20, lg: 32 }}
          fontWeight={700}
          color='white'
          borderLeft={'4px solid'}
          borderColor={'primary'}
          pl='19px'
        >
          КОРЗИНА
        </Heading>
        <Text color={'primary'} fontSize={{ base: 12, lg: 15 }}>
          (в корзине 3 товара)
        </Text>
      </HStack>
      <Box bg={'#4f4a49'} rounded={10} mt={{ base: 8, lg: '71px' }}>
        <Stack separator={<StackSeparator />}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            w={'full'}
            justifyContent={'space-between'}
            p={5}
          >
            <HStack gap={'39px'}>
              <Image
                w={'117px'}
                h={'86px'}
                src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
                alt='pic'
              />
              <Box>
                <Text color={'white'} fontWeight={700} fontSize={18}>
                  ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
                </Text>
                <Text
                  fontSize={12}
                  maxW={'265px'}
                  fontWeight={400}
                  color={'#A6A7AB'}
                  display={{ base: 'none', lg: 'flex' }}
                >
                  Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                  оливок, базилик, соус песто
                </Text>
                <HStack
                  mt={3}
                  display={{ base: 'flex', lg: 'none' }}
                  w={'full'}
                  justify={'space-between'}
                >
                  <HStack color={'white'}>
                    <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                      <Icon icon='ic:round-minus' width='24' height='24' />
                    </IconButton>
                    <Text fontSize={20} fontWeight={700}>
                      1
                    </Text>
                    <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                      <Icon icon='ic:round-plus' width='24' height='24' />
                    </IconButton>
                  </HStack>
                  <HStack>
                    <Text fontWeight={700} fontSize={20} color={'white'}>
                      1640 ₽
                    </Text>
                    <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                      <Icon icon='ic:round-close' width='24' height='24' />{' '}
                    </IconButton>
                  </HStack>
                </HStack>
              </Box>
            </HStack>

            <HStack
              justifyContent={'space-between'}
              display={{ base: 'none', lg: 'flex' }}
              w={'full'}
            >
              <HStack color={'white'}>
                <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                  <Icon icon='ic:round-minus' width='24' height='24' />
                </IconButton>
                <Text fontSize={20} fontWeight={700}>
                  1
                </Text>
                <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                  <Icon icon='ic:round-plus' width='24' height='24' />
                </IconButton>
              </HStack>
              <Text fontWeight={700} fontSize={20} color={'white'}>
                1640 ₽
              </Text>
              <IconButton bg={'primary'} rounded={'full'} size={'xs'}>
                <Icon icon='ic:round-close' width='24' height='24' />{' '}
              </IconButton>
            </HStack>
          </SimpleGrid>
        </Stack>
      </Box>
    </Container>
  );
};

export default Cart;

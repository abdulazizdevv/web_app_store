'use client';
import {
  Box,
  Button,
  Checkbox,
  Container,
  GridItem,
  Heading,
  HStack,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Checkout = () => {
  return (
    <div>
      <Container mt={'34px'}>
        <Text color={'white'} alignItems={'end'} display={'flex'}>
          <Icon icon='lsicon:left-outline' width='24' height='24' />
          <Link href='/cart' color={'white'}>
            в корзину{' '}
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
            Оформление заказа
          </Heading>
        </HStack>
        <Stack mt={'54px'} gap={'22px'}>
          <Box p={8} bg={'#4f4a49'} rounded={10}>
            <Text fontSize={20} fontWeight={700} color={'light'}>
              1. Контактная информация
            </Text>
            <HStack gap={'15px'} mt={'31px'}>
              <Input
                h={'60px'}
                size={'xl'}
                rounded={10}
                color={'white'}
                _placeholder={{
                  color: 'white',
                }}
                placeholder='Имя*'
                borderColor={'#FFFFFF1A'}
              />
              <Input
                h={'60px'}
                size={'xl'}
                rounded={10}
                color={'white'}
                placeholder='Телефон*'
                _placeholder={{
                  color: 'white',
                }}
                borderColor={'#FFFFFF1A'}
              />
            </HStack>
          </Box>
          <Box p={8} bg={'#4f4a49'} rounded={10}>
            <Text mb={'31px'} fontSize={18} fontWeight={700} color={'light'}>
              2. Доставка{' '}
            </Text>
            <Tabs.Root defaultValue='projects' variant='plain'>
              <Tabs.List
                bg='transparent'
                border={'1px solid'}
                borderColor={'primary'}
                rounded={10}
                h={'60px'}
                color={'light'}
                overflow={'hidden'}
              >
                <Tabs.Trigger
                  maxW={'184px'}
                  display={'flex'}
                  justifyContent={'center'}
                  color={'white'}
                  h={'60px'}
                  fontSize={{ base: 12, lg: 16 }}
                  value='members'
                >
                  Доставка
                </Tabs.Trigger>
                <Tabs.Trigger
                  maxW={'184px'}
                  display={'flex'}
                  justifyContent={'center'}
                  color={'white'}
                  h={'60px'}
                  fontSize={{ base: 12, lg: 16 }}
                  value='projects'
                >
                  Самовывоз
                </Tabs.Trigger>

                <Tabs.Indicator color={'light'} bg={'primary'} />
              </Tabs.List>
            </Tabs.Root>
            <Text fontWeight={700} mt={'30px'} mb={'22px'} color={'white'}>
              Адрес доставки
            </Text>
            <SimpleGrid columns={4} gap={'15px'}>
              <GridItem colSpan={{ base: 2, md: 3 }}>
                <Input
                  h={'60px'}
                  size={'xl'}
                  rounded={10}
                  color={'white'}
                  _placeholder={{
                    color: 'white',
                  }}
                  placeholder='Укажите улицу*'
                  borderColor={'#FFFFFF1A'}
                />
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <Input
                  h={'60px'}
                  size={'xl'}
                  rounded={10}
                  color={'white'}
                  _placeholder={{
                    color: 'white',
                  }}
                  placeholder='Укажите улицу*'
                  borderColor={'#FFFFFF1A'}
                />
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={3} gap={'15px'} mt={'15px'}>
              <Input
                h={'60px'}
                size={'xl'}
                rounded={10}
                color={'white'}
                _placeholder={{
                  color: 'white',
                }}
                placeholder='№ квартиры/офиса'
                borderColor={'#FFFFFF1A'}
              />
              <Input
                h={'60px'}
                size={'xl'}
                rounded={10}
                color={'white'}
                _placeholder={{
                  color: 'white',
                }}
                placeholder='Подъезд'
                borderColor={'#FFFFFF1A'}
              />
              <Input
                h={'60px'}
                size={'xl'}
                rounded={10}
                color={'white'}
                _placeholder={{
                  color: 'white',
                }}
                placeholder='Этаж'
                borderColor={'#FFFFFF1A'}
              />
            </SimpleGrid>
            <Input
              h={'60px'}
              size={'xl'}
              rounded={10}
              color={'white'}
              _placeholder={{
                color: 'white',
              }}
              mt={'15px'}
              placeholder='Комментарий'
              borderColor={'#FFFFFF1A'}
            />
          </Box>
          <Box p={8} bg={'#4f4a49'} rounded={10}>
            <Text fontSize={20} fontWeight={700} color={'light'}>
              3. Оплатить
            </Text>
            <HStack gap={'15px'} mt={'31px'}>
              <Tabs.Root defaultValue='projects' variant='plain'>
                <Tabs.List
                  bg='transparent'
                  border={'1px solid'}
                  borderColor={'primary'}
                  rounded={10}
                  h={'60px'}
                  color={'light'}
                  overflow={'hidden'}
                >
                  <Tabs.Trigger
                    maxW={'184px'}
                    display={'flex'}
                    justifyContent={'center'}
                    color={'white'}
                    h={'60px'}
                    fontSize={{ base: 12, lg: 16 }}
                    value='members'
                  >
                    Оплата онлайн
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    maxW={'184px'}
                    display={'flex'}
                    justifyContent={'center'}
                    color={'white'}
                    h={'60px'}
                    fontSize={{ base: 12, lg: 16 }}
                    value='projects'
                  >
                    Наличными
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    maxW={'184px'}
                    display={'flex'}
                    justifyContent={'center'}
                    color={'white'}
                    h={'60px'}
                    fontSize={{ base: 12, lg: 16 }}
                    value='tasks'
                  >
                    Курьеру картой
                  </Tabs.Trigger>
                  <Tabs.Indicator color={'light'} bg={'primary'} />
                </Tabs.List>
              </Tabs.Root>
            </HStack>
          </Box>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            p={8}
            bg={'#4f4a49'}
            rounded={10}
          >
            <Checkbox.Root color={'light'}>
              <Checkbox.HiddenInput />
              <Checkbox.Control bg={'primary'} />
              <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
            </Checkbox.Root>
            <Button size={'lg'} rounded={10} bg={'primary'} h={'51px'}>
              Оформить заказ
            </Button>
          </HStack>
        </Stack>
      </Container>
    </div>
  );
};

export default Checkout;

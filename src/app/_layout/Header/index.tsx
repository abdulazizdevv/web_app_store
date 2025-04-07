'use client';
import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Popover,
  Portal,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Auth from '@/app/_components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux } from '@/store/types';
import { useRouter } from 'next/navigation';
import { authActions } from '@/store/auth/auth.slice';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { access_token } = useSelector((state: IRedux) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Box
      bg='dark'
      display='flex'
      alignItems='center'
      borderBottom={'1px solid #FFFFFF1A'}
    >
      <Container maxW='container.xl' h='full' centerContent>
        <HStack
          w='full'
          h='99px'
          alignItems='center'
          justifyContent='space-between'
          display={{ base: 'none', md: 'flex' }}
        >
          <Link href={'/'}>
            <Text fontSize={25} fontWeight={700} color='light'>
              LOGOS
            </Text>
          </Link>

          <InputGroup
            w={'full'}
            maxW={'555px'}
            bg={'dark.100'}
            rounded={10}
            startElement={
              <Icon
                icon='tdesign:location'
                width='24'
                height='24'
                color='#CFCFCF'
              />
            }
            endElement={
              <Icon
                icon='iconoir:search'
                width='24'
                height='24'
                color='#CFCFCF'
              />
            }
            color={'light'}
          >
            <Input
              rounded={10}
              _placeholder={{ color: 'light' }}
              placeholder='Введите адрес доставки'
              paddingLeft='40px'
              paddingRight='40px'
            />
          </InputGroup>
          <HStack gap='10px'>
            <IconButton rounded='full' bg='primary' aria-label='call'>
              <Icon icon='tdesign:call-1' width='24' height='24' />
            </IconButton>
            <Stack gap={0} color='light'>
              <Text fontWeight={400} fontSize={14}>
                Контакты:
              </Text>
              <Text fontWeight={700}>+7 (917) 510-57-59</Text>
            </Stack>
          </HStack>
          <HStack>
            <Button
              bg='primary'
              rounded={10}
              onClick={() =>
                access_token ? router.push('/cart') : setOpen(true)
              }
              color='light'
            >
              Корзина | 4
            </Button>
            {access_token ? (
              <>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <Button bg='primary' rounded={10} color='light'>
                      <Icon icon='mdi:user' width='24' height='24' />
                    </Button>
                  </Popover.Trigger>
                  <Portal>
                    <Popover.Positioner>
                      <Popover.Content maxW={'150px'} p={0}>
                        <Popover.Body p={1} bg={'dark'}>
                          <Button
                            w={'full'}
                            variant={'outline'}
                            color={'light'}
                            _hover={{
                              color: 'dark',
                            }}
                            onClick={() => dispatch(authActions.reset())}
                          >
                            <Icon icon='mdi:logout' width='24' height='24' />
                            Выйти
                          </Button>
                        </Popover.Body>
                      </Popover.Content>
                    </Popover.Positioner>
                  </Portal>
                </Popover.Root>
              </>
            ) : (
              <Button
                bg='primary'
                rounded={10}
                onClick={() =>
                  access_token ? router.push('/cart') : setOpen(true)
                }
                color='light'
              >
                Вход
              </Button>
            )}
          </HStack>
        </HStack>
        {/* mobile  */}
        <Stack
          h='142px'
          gap={'17px'}
          w={'full'}
          display={{ base: 'flex', md: 'none' }}
        >
          <HStack w={'full'} justifyContent='space-between'>
            <Button
              gap={0}
              flexDir={'column'}
              p={2}
              size={'2xl'}
              variant={'plain'}
              color='primary'
            >
              <Icon icon='material-symbols:menu' width='48' height='48' />
              <Text fontSize={12} color={'white'}>
                МЕНЮ
              </Text>
            </Button>
            <Link href={'/'}>
              <Text fontSize={25} fontWeight={700} color='light'>
                LOGOS
              </Text>
            </Link>
            <HStack>
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                bg='primary'
                rounded='10px'
                color='light'
                cursor={'pointer'}
                py={2}
                px={3}
                onClick={() => router.push('/cart')}
              >
                <Icon
                  icon='streamline:shopping-cart-subtract'
                  width='24'
                  height='24'
                />
                <Box as='span' w='80%' h='1px' bg='whiteAlpha.300' mt={'3px'} />
                <Text fontSize='sm'>корзина</Text>
              </Box>
              {access_token ? (
                <>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        bg='primary'
                        rounded='10px'
                        color='light'
                        cursor={'pointer'}
                        py={2}
                        px={3}
                      >
                        <Icon icon='mdi:user' width='24' height='24' />

                        <Box
                          as='span'
                          w='80%'
                          h='1px'
                          bg='whiteAlpha.300'
                          mt={'3px'}
                        />
                        <Text fontSize='sm'>Пользователь</Text>
                      </Box>
                    </Popover.Trigger>
                    <Portal>
                      <Popover.Positioner>
                        <Popover.Content maxW={'150px'} p={0}>
                          <Popover.Body p={1} bg={'dark'}>
                            <Button
                              w={'full'}
                              variant={'outline'}
                              color={'light'}
                              _hover={{
                                color: 'dark',
                              }}
                              onClick={() => dispatch(authActions.reset())}
                            >
                              <Icon icon='mdi:logout' width='24' height='24' />
                              Выйти
                            </Button>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>
                </>
              ) : (
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  bg='primary'
                  rounded='10px'
                  color='light'
                  cursor={'pointer'}
                  py={2}
                  px={3}
                  onClick={() =>
                    access_token ? router.push('/cart') : setOpen(true)
                  }
                >
                  <Icon icon='material-symbols:login' width='24' height='24' />
                  <Box
                    as='span'
                    w='80%'
                    h='1px'
                    bg='whiteAlpha.300'
                    mt={'3px'}
                  />
                  <Text fontSize='sm'>Вход</Text>
                </Box>
              )}
            </HStack>
          </HStack>
          <InputGroup
            w={'full'}
            maxW={'555px'}
            h={'52px'}
            bg={'dark.100'}
            rounded={10}
            startElement={
              <Icon
                icon='tdesign:location'
                width='24'
                height='24'
                color='#CFCFCF'
              />
            }
            endElement={
              <Icon
                icon='iconoir:search'
                width='24'
                height='24'
                color='#CFCFCF'
              />
            }
            color={'light'}
          >
            <Input
              rounded={10}
              _placeholder={{ color: 'light' }}
              placeholder='Введите адрес доставки'
              paddingLeft='40px'
              paddingRight='40px'
            />
          </InputGroup>
        </Stack>
        <Auth open={open} setOpen={setOpen} />
      </Container>
    </Box>
  );
};

export default Header;

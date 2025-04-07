'use client';
import { login } from '@/service/auth.service';
import { authActions } from '@/store/auth/auth.slice';
import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
} from '@chakra-ui/react';
import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';

const Auth = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: '',
    expiresInMins: 30,
  });
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      setLoading(true);

      const result = await login(data);
      dispatch(authActions.setUser(result));
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog.Root
        placement={'center'}
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content bg={'dark'} mx={4} color={'light'}>
              <Dialog.Header>
                <Dialog.Title>Auth</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Stack gap={4}>
                  <Field.Root>
                    <Field.Label>Username</Field.Label>
                    <Input
                      value={data?.username}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Password</Field.Label>
                    <Input
                      value={data?.password}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                  </Field.Root>
                </Stack>
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  type='submit'
                  onClick={onSubmit}
                  w={'full'}
                  bg={'primary'}
                  size={'lg'}
                  rounded={8}
                  loading={isLoading}
                >
                  Submit
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size='sm' />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
};

export default Auth;

// store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from 'cookies-next';
import { IUser } from '../types';

interface IState {
  user: IUser | null;
  access_token: IUser | null;
}

const initialState: IState = {
  user: null,
  access_token: null,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.access_token = null;
    },

    logout: () => {
      deleteCookie('user_id', { path: '/' });
      deleteCookie('access_token', { path: '/' });
      return initialState;
    },

    setUser: (state, action: PayloadAction<any>) => {
      const { accessToken, id, ...userData } = action.payload;

      state.user = {
        id,
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        gender: userData.gender,
        image: userData.image,
      };
      state.access_token = accessToken;

      setCookie('user_id', id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setCookie('access_token', accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    },

    updateUser: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) => {
      if (state.user) {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
      }
    },
  },
});

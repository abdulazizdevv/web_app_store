import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import cartReducer from './cart/cart.slice';
import commonReducer from './common/common.slice';
import checkoutReducer from './checkout/checkout.slice';
import settingsReducer from './settings/settings.slice';
import sessionReducer from './session/session.slice';
import { authReducer } from './auth/auth.slice';

// Define action type for resetting store
export const RESET_APP_STATE = 'app/resetState';

const authConfig = {
  key: 'auth',
  version: 1,
  storage,
};
const cartConfig = {
  key: 'cart',
  version: 1,
  storage,
};
const commonConfig = {
  key: 'common',
  version: 1,
  storage,
};
const settingsConfig = {
  key: 'settings',
  version: 1,
  storage,
};
const checkoutConfig = {
  key: 'checkout',
  version: 1,
  storage: sessionStorage,
};
const sessionConfig = {
  key: 'session',
  version: 1,
  storage: sessionStorage,
};

// Create the appReducer with all persisted reducers
const appReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  cart: persistReducer(cartConfig, cartReducer),
  common: persistReducer(commonConfig, commonReducer),
  checkout: persistReducer(checkoutConfig, checkoutReducer),
  settings: persistReducer(settingsConfig, settingsReducer),
  session: persistReducer(sessionConfig, sessionReducer),
});

// Create root reducer with reset capability
const rootReducer = (state: any, action: any) => {
  // When the reset action is dispatched, set state to undefined
  if (action.type === RESET_APP_STATE) {
    console.log('RESET_APP_STATE');
    // Clear localStorage persisted states
    storage.removeItem('persist:auth');
    storage.removeItem('persist:cart');
    storage.removeItem('persist:common');
    storage.removeItem('persist:settings');

    sessionStorage.removeItem('persist:session');
    sessionStorage.removeItem('persist:checkout');

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          RESET_APP_STATE,
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Action creator for resetting the entire store
export const resetAppState = () => ({
  type: RESET_APP_STATE,
});

'use client';

import { Provider } from 'react-redux';
import { Stack } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '../store';
import ThemeProvider from './theme';
import Header from '@/app/_layout/Header';
import Footer from '@/app/_layout/Footer';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Stack gap={0} minH='100vh'>
            <Header />
            {children}
            <Footer />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

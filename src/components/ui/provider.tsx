'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function Provider({
  system,
  props,
  children,
}: {
  system: any;
  props: ColorModeProviderProps;
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
      {children}
    </ChakraProvider>
  );
}

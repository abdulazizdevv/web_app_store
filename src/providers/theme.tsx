import { createSystem, defaultConfig } from '@chakra-ui/react';
import { Provider as Chakra } from '@/components/ui/provider';
import { COLORS } from '@/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const system: any = createSystem(defaultConfig, {
    theme: {
      tokens: {
        colors: {
          primary: {
            DEFAULT: { value: '#72A479' },
            solid: { value: '#72A479' },
          },
          ...COLORS,
        },
      },
      semanticTokens: {
        colors: {
          gray: {
            muted: { value: '#f3f3f3' },
          },
          bg: {
            muted: { value: '#f3f3f3' },
          },
        },
      },
    },
    globalCss: {
      ':root': {
        '--primary-color': '#72A479',
        '--light-color': '#fff',
        '--rate-color': '#FFB338',
        '--gray-color-300': '#F3F3F3',
        '--gray-color-400': '#EDEDED',
        '--gray-color-500': '#CDCDCD',
        '--gray-color-600': '#676767',
        '--gray-color-700': '#667085',
        '--gray-color-800': '#475467',
      },
    },
  });

  return (
    <Chakra system={system} props={{ forcedTheme: 'light' }}>
      {children}
    </Chakra>
  );
}

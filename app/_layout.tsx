import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import '../global.css';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          <Stack.Screen name='index' options={{ title: 'Components App' }} />
          {
            allRoutes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                  headerShown: !route.title.includes('Slides')
                }}
              />
            ))
          }

        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}

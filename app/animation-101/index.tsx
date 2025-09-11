import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Text } from 'react-native';

const Animation101Screen = () => {
  return (
    <ThemedView margin>
      <Text>Animation101Screen</Text>

      <ThemedButton onPress={() => console.log('fadeIn')} className='mb-2'>
        FadeIn
      </ThemedButton>

      <ThemedButton onPress={() => console.log('fadeOut')}>
        FadeIn
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;

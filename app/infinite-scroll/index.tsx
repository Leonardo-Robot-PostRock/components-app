import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <ThemedView>

      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItems number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
      />

    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number
}

const ListItems = ({ number }: ListItemProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        height: 400,
        width: '100%'
      }}
    />
  )
}
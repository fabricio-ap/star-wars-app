import { FlatList } from 'react-native';
import { Card } from '../../molecules';

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/51H--lU9YGL.jpg',
  },
  {
    id: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/51H--lU9YGL.jpg',
  },
];

export function HomeList() {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

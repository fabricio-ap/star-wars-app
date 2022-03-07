import { FlatList } from 'react-native';
import { Text } from '~/components/atoms';
import { theme } from '~/styles';
import { Card } from '../../molecules';
import { ListContainer } from './styles';

export function HomeList({ data, title }) {
  return (
    <ListContainer>
      <Text fontFamily="black" size={18} ml={24}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingLeft: theme.metrics.px(24),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  );
}

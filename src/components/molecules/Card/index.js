import { useNavigation } from '@react-navigation/native';
import { useDataStore } from '~/services/stores';
import { CardContainer, CardImage } from './styles';

export function Card({ item }) {
  const navigation = useNavigation();

  const { setSelectedData } = useDataStore();

  const onSelectItem = () => {
    setSelectedData(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
}

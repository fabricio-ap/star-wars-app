import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '~/styles';
import { GoBackContainer } from './styles';

export function GoBack() {
  const navigation = useNavigation();
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  );
}

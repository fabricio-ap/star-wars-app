import { Ionicons } from '@expo/vector-icons';
import { Text } from '~/components/atoms';
import { theme } from '~/styles';
import { ButtonContainer } from './styles';

export function IconButton({ iconName, label, onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamuly="semiBold" size={10} mt={6}>
        {label}
      </Text>
    </ButtonContainer>
  );
}

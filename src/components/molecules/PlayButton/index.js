import { Ionicons } from '@expo/vector-icons';
import { Text } from '~/components/atoms';
import { theme } from '~/styles';
import { ButtonContainer } from './styles';

export function PlayButton() {
  return (
    <ButtonContainer>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} color="black">
        Play
      </Text>
    </ButtonContainer>
  );
}

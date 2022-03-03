import { View } from 'react-native';
import { Logo, Text } from '../../components';
import styles from './styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Star Wars - Wiki</Text>
    </View>
  );
}

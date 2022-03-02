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

// https://www.youtube.com/watch?v=a2e2lXC5EGM&list=PL4zG19BCs4pdPJzElbUxCykHTClU-B0Ts&index=1

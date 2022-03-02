import { Image, Text, View } from 'react-native';
import logoImage from '../../../assets/image/logo-empire.png';
import styles from './styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <Text style={styles.titleText}>Star Wars - Wiki</Text>
    </View>
  );
}

// https://www.youtube.com/watch?v=a2e2lXC5EGM&list=PL4zG19BCs4pdPJzElbUxCykHTClU-B0Ts&index=1

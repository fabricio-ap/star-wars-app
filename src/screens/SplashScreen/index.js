import { useEffect } from 'react';
import { Container, Logo, Text } from '../../components';

export function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, [navigation]);

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>StarWars - Wiki</Text>
    </Container>
  );
}

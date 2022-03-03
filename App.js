import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
  useFonts,
} from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <SplashScreen />;
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomBar } from '~/components';
import {
  DetailScreen,
  FavoriteScreen,
  HomeScreen,
  SearchScreen,
  SplashScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomRoute = () => (
  <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false, tabBarLabel: 'Início' }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false, tabBarLabel: 'Pesquisar' }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{ headerShown: false, tabBarLabel: 'Favoritos' }}
    />
  </Tab.Navigator>
);

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { Ionicons } from '@expo/vector-icons';
import { Text } from '~/components/atoms';
import { theme } from '~/styles';
import { BarItem, BottomBarContainer } from './styles';

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorite: 'heart-outline',
};

export function BottomBar({ state, descriptors, navigation }) {
  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Ionicons
              name={routeIcons[route.name]}
              size={theme.metrics.px(24)}
              color={isFocused ? theme.colors.white : theme.colors.grey}
            />
            <Text
              fontFamily="semiBold"
              size={10}
              color={isFocused ? 'white' : 'grey'}
            >
              {label}
            </Text>
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
}

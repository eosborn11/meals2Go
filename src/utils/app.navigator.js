import { RestaurantScreen } from "../Screens/RestaurantScreen";
import { PreviouslyOrderedScreen } from "../Screens/PreviouslyOrderedScreen";
import { MapScreen } from "../Screens/MapScreen";
import {
  mapTabBarIcon,
  previousOrderTabBarIcon,
  restaurantTabBarIcon,
} from "../icons/restaurantTabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: restaurantTabBarIcon,
        }}
        name="Restaurants"
        component={RestaurantScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: mapTabBarIcon,
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: previousOrderTabBarIcon,
        }}
        name="Previous Orders"
        component={PreviouslyOrderedScreen}
      />
    </Tab.Navigator>
  );
}

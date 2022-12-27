import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantScreen } from "./src/Screens/RestaurantScreen";
import { PreviouslyOrderedScreen } from "./src/Screens/PreviouslyOrderedScreen";
import { MapScreen } from "./src/Screens/MapScreen";
import {
  Icons,
  mapTabBarIcon,
  previousOrderTabBarIcon,
  restaurantTabBarIcon,
  tabBarIcon,
} from "./src/icons/restaurantTabBarIcon";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
const Tab = createBottomTabNavigator();

function MyTabs() {
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

export default function App() {
  return (
    <RestaurantsContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </RestaurantsContextProvider>
  );
}

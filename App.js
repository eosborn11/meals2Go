import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/Screens/RestaurantScreen";
import { PreviouslyOrderedScreen } from "./src/Screens/PreviouslyOrderedScreen";
import { MapScreen } from "./src/Screens/MapScreen";
import {
  Icons,
  mapTabBarIcon,
  previousOrderTabBarIcon,
  restaurantTabBarIcon,
  tabBarIcon,
} from "./src/icons/restaurantTabBarIcon";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: restaurantTabBarIcon,
        }}
        name="Restaurants"
        component={HomeScreen}
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
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

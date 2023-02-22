import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../Screens/RestaurantScreen";
import { RestaurantDetailModal } from "../Screens/RestaurantDetailModal";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
      <RestaurantStack.Group screenOptions={{ presentation: "modal" }}>
        <RestaurantStack.Screen
          name="restaurantDetail"
          component={RestaurantDetailModal}
        />
      </RestaurantStack.Group>
    </RestaurantStack.Navigator>
  );
};

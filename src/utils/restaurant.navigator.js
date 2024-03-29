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
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantScreen}
        options={{ headerShown: false, headerTitle: "Restaurants" }}
      />
      <RestaurantStack.Screen
        name="restaurantDetail"
        component={RestaurantDetailModal}
        options={{ headerTitle: "" }}
      />
    </RestaurantStack.Navigator>
  );
};

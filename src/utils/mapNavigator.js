import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { RestaurantDetailModal } from "../Screens/RestaurantDetailModal";
import { MapScreen } from "../Screens/MapScreen";

const MapStack = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <MapStack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false, headerTitle: "Restaurants" }}
      />
      <MapStack.Screen
        name="restaurantDetail"
        component={RestaurantDetailModal}
        options={{ headerTitle: "" }}
      />
    </MapStack.Navigator>
  );
};

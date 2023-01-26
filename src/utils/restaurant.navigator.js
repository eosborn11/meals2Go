import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../Screens/RestaurantScreen";
import { Text } from "react-native";
import { restaurantDetailScreen } from "../Screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="restaurantDetail"
        component={restaurantDetailScreen}
      />
      {/* <RestaurantStack.Screen
        name="restaurant1"
        component={() => <Text>restaurantDetail</Text>}
      /> */}
    </RestaurantStack.Navigator>
  );
};

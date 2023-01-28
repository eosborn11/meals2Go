import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../Screens/RestaurantScreen";
import { RestaurantDetailScreen } from "../Screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="restaurantDetail"
        component={RestaurantDetailScreen}
      />
      {/* <RestaurantStack.Screen
        name="restaurant1"
        component={() => <Text>restaurantDetail</Text>}
      /> */}
    </RestaurantStack.Navigator>
  );
};

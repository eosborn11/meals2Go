import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantScreen } from "../Screens/RestaurantScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
    </RestaurantStack.Navigator>
  );
};

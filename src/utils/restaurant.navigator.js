import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantScreen } from "../Screens/RestaurantScreen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="restaurantDetail"
        component={() => <Text>restaurantDetail</Text>}
      />
      <RestaurantStack.Screen
        name="restaurant1"
        component={() => <Text>restaurantDetail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};

import React, { useContext } from "react";
import { View } from "react-native";
import { RestaurantsContext } from "../restaurants/restaurants.context";

export const MapMarkerCallout = () => {
  const { restaurant = [] } = useContext(RestaurantsContext);

  return <View>{restaurant.name}</View>;
};

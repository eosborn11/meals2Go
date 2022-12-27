import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { restaurants } from "../RestaurantData";
import { SearchRestaurants } from "../utils/SearchRestaurants";
import { RestaurantInfoCard } from "../RestaurantInfoCard";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../services/restaurants/restaurants.context";

export function RestaurantScreen() {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <View>
        <FlatList
          data={RestaurantsContext.restaurants}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SearchRestaurants } from "../utils/SearchRestaurants";
import { RestaurantInfoCard } from "../RestaurantInfoCard";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { restaurantTransform } from "../services/restaurants/restaurants.service";
export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const transformedRestaurants = restaurantTransform({ results: restaurants });
  const renderItem = ({ item, index }) => {
    console.log(item.photos[0]);
    return (
      <RestaurantInfoCard
        name={item.name}
        description={item.types}
        rating={item.rating}
        address={item.vicinity}
        isOpenNow={item.isOpenNow}
        photos={item.photos[0]}
        console
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <FlatList
        data={transformedRestaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      {isLoading && (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size={"large"} color={"red"} />
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  ActivityIndicator: {
    alignItems: "center",
    flex: 1,
  },
});

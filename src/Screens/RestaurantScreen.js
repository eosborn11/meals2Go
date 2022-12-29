import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { SearchRestaurants } from "../utils/SearchRestaurants";
import { RestaurantInfoCard } from "../RestaurantInfoCard";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);

  const renderItem = ({ item }) => {
    return (
      <RestaurantInfoCard
        name={item.name}
        description={item.description}
        rating={item.rating}
        address={item.address}
        isOpenNow={item.isOpenNow}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <View>
        <FlatList
          data={restaurantContext.restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

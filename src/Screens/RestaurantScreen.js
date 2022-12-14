import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { restaurants } from "../RestaurantData";
import { SearchRestaurants } from "../utils/SearchRestaurants";
import { RestaurantInfoCard } from "../RestaurantInfoCard";

export function HomeScreen() {
  const renderItem = ({ item }) => <RestaurantInfoCard {...item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <View>
        <FlatList data={restaurants} renderItem={renderItem} />
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

import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const restaurantDetailScreen = () => {
  return (
    <View style={styles.restaurantDetailRender}>
      <Text>restaurantDetailScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  restaurantDetailRender: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { SearchMaps } from "../utils/SearchMaps";

export function MapScreen() {
  return (
    <View>
      <SearchMaps />
      <MapView style={styles.MapView} />
    </View>
  );
}

const styles = StyleSheet.create({
  MapView: {
    height: "100%",
  },
});

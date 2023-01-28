import React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

export function MapScreen() {
  return (
    <View>
      <MapView style={styles.MapView} />
    </View>
  );
}

const styles = StyleSheet.create({
  MapView: {
    height: "100%",
  },
});

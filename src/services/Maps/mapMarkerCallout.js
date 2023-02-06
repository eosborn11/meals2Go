import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
// import WebView from "react-native-webview";

// const isAndroid = Platform.OS === "android";

export const MapMarkerCallout = ({ restaurant, photos }) => {
  return (
    <View>
      <Text>{restaurant.name}</Text>
      <Image style={styles.Image} source={{ uri: restaurant.photos[0] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 120,
    width: 120,
  },
});

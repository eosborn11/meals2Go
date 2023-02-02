import React from "react";
import { View, Text } from "react-native";
import { Platform } from "react-native";
// import WebView from "react-native-webview";

// const isAndroid = Platform.OS === "android";

export const MapMarkerCallout = ({ restaurant }) => {
  return (
    <View>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

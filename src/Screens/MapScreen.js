import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { SearchMaps } from "../utils/SearchMaps";
import { LocationContext } from "../services/location/location.context";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { MapMarkerCallout } from "../services/Maps/mapMarkerCallout";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <View>
      <SearchMaps />
      <MapView
        style={styles.MapView}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((item) => {
          return (
            <Marker
              key={item.name}
              title={item.name}
              coordinate={{
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("restaurantDetail", { item })
                }
              >
                <MapMarkerCallout restaurant={item} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  MapView: {
    height: "100%",
  },
});

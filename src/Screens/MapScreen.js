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
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("restaurantDetail", {
                    restaurant,
                  })
                }
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("restaurantDetail", { item })
                  }
                >
                  <MapMarkerCallout restaurant={restaurant} />
                </TouchableOpacity>
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

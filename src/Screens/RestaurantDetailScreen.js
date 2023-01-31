import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../RestaurantInfoCard";
import { ScrollView } from "react-native-gesture-handler";

export const RestaurantDetailScreen = ({ route }) => {
  const { item } = route.params;
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!setExpanded);

  return (
    <View style={styles.restaurantDetailRender}>
      <View>
        <RestaurantInfoCard
          name={item.name}
          description={item.types}
          rating={item.rating}
          address={item.vicinity}
          isOpenNow={item.isOpenNow}
          photos={item.photos[0]}
        />
      </View>
      <View>
        <ScrollView>
          <List.Section style={styles.listSection} title="Menu">
            <List.Accordion
              title="Breakfast"
              left={(props) => <List.Icon {...props} icon={"food-croissant"} />}
            >
              <List.Item title="eggs" />
              <List.Item title="pancakes" />
              <List.Item title="waffles" />
            </List.Accordion>

            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="food-croissant" />}
            >
              <List.Item title="grilled cheese" />
              <List.Item title="cheese burger" />
              <List.Item title="quesadilla" />
            </List.Accordion>

            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-croissant" />}
            >
              <List.Item title="steak" />
              <List.Item title="fried chicken" />
              <List.Item title="prime rib" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  restaurantDetailRender: {
    flex: 1,
  },
  listSection: {
    // alignItems: "flex-end",
  },
});

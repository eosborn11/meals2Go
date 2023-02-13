import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../RestaurantInfoCard";

export const RestaurantDetailModal = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <TouchableWithoutFeedback onPress={() => this.setState({ visible: false })}>
      <View
        isVisible={this.state.visible}
        style={styles.restaurantDetailRender}
      >
        <TouchableWithoutFeedback onPress={() => {}}>
          <Button title="Close" onPress={() => navigation.goBack()} />
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
          <ScrollView>
            <List.Section title="Menu">
              <List.Accordion
                title="Breakfast"
                left={(props) => (
                  <List.Icon {...props} icon={"food-croissant"} />
                )}
              >
                <List.Item title="eggs" />
                <List.Item title="pancakes" />
                <List.Item title="waffles" />
              </List.Accordion>

              <List.Accordion
                title="Lunch"
                left={(props) => <List.Icon {...props} icon={"food"} />}
              >
                <List.Item title="grilled cheese" />
                <List.Item title="cheese burger" />
                <List.Item title="quesadilla" />
              </List.Accordion>

              <List.Accordion
                title="Dinner"
                left={(props) => <List.Icon {...props} icon={"food-turkey"} />}
              >
                <List.Item title="steak" />
                <List.Item title="fried chicken" />
                <List.Item title="prime rib" />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  restaurantDetailRender: {
    flex: 1,
  },
});

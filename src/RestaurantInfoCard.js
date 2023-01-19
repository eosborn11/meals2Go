import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "./icons/star";
import openNow from "./icons/openNow";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestaurantInfoCard = (props) => {
  const { name, description, rating, address, isOpenNow, photos } = props;

  // const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{description}</Paragraph>
          <Paragraph>{address}</Paragraph>
          <Paragraph style={styles.rating}>
            {/* {ratingArray.map((_, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))} */}
            {isOpenNow && (
              <View style={styles.isOpenNow}>
                <SvgXml xml={openNow} width={20} height={20} paddingLeft={60} />
              </View>
            )}
          </Paragraph>
        </Card.Content>
        <Card.Cover key={name} source={{ uri: photos }} />
        <Card.Actions>
          <Button
            style={styles.Button}
            onPress={() => Alert.alert("button pressed")}
          >
            Order Now
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Alert.alert("button pressed")}
          >
            leave rating
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {},
  Card: {
    margin: 5,
    borderColor: "red",
    borderWidth: 5,
    elevation: 5,
  },
  Button: {
    elevation: 5,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  isOpenNow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

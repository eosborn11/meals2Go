import React from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Restaurants } from "./RestaurantData";
import { SvgXml } from "react-native-svg";
import star from "./utils /star";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestaurantInfoCard = (props) => {
  const { name, description, rating, address } = props;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{description}</Paragraph>
          <Paragraph>{address}</Paragraph>
          <Paragraph>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://roosterswings.com/assets/inc/timthumb.php?w=1000&h=600&src=https://d651b0bc45559e9eaafa-f4d239947d449bf5c8da6abd73db9e1f.ssl.cf2.rackcdn.com/traditional-wings.jpg",
          }}
        />
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
  title: {},
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
});

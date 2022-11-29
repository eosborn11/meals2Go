import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestaurantInfoCard = (props) => {
  const { name, description, icon, photos, address, isOpenNow, rating } = props;

  return (
    <View>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://roosterswings.com/assets/inc/timthumb.php?w=1000&h=600&src=https://d651b0bc45559e9eaafa-f4d239947d449bf5c8da6abd73db9e1f.ssl.cf2.rackcdn.com/traditional-wings.jpg",
          }}
        />
        <Card.Actions>
          <Button>Order Now</Button>
          <Button>leave rating</Button>
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
});

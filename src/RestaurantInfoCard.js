import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestaurantInfoCard = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Restaurant Name</Title>
      <Paragraph>Card content</Paragraph>
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
);

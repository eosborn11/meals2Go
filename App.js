import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SearchRestaurants } from "./src/utils /SearchRestaurants";
import { RestaurantInfoCard } from "./src/RestaurantInfoCard";

const data = [
  {
    name: "roosters",
    description: "good",
  },
  {
    name: "house of japan",
    description: "fancy",
  },
  {
    name: "ruth chris",
    description: "getting lucky",
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <RestaurantInfoCard name={item.name} description={item.description} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

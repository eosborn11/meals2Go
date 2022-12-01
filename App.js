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
import { restaurants } from "./src/RestaurantData";

export default function App() {
  const renderItem = ({ item }) => (
    <RestaurantInfoCard
      name={item.name}
      description={[item.description, item.isOpenNow]}
      address={item.address}
      rating={item.rating}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <FlatList data={restaurants} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

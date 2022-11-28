import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SearchRestaurants } from "./src/utils /SearchRestaurants";
import { RestaurantInfoCard } from "./src/RestaurantInfoCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchRestaurants />
      </View>
      <View>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

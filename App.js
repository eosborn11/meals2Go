import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchBar from "./src/utils /Searchbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>yo</Text>
      </View>
      <View>
        <Text style={styles.list}>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
});

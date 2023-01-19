import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { MyTabs } from "./src/utils/app.navigator";
export default function App() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}

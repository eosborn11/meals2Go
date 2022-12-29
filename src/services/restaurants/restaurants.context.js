import React, { useEffect, useState, useMemo, createContext } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";
import { restaurantsData } from "../../RestaurantData";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurantsData }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

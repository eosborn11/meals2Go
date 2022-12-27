import React, { useEffect, useState, useMemo, createContext } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

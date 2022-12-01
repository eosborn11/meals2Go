import React from "react";
import StarRating from "react-native-star-rating";

export const restaurants = [
  {
    name: "roosters",
    description: "good",
    address: "1214 chicken wing dr",
    isOpenNow: true,
    rating: <StarRating disabled={false} maxStars={5} />,
  },
  {
    name: "house of japan",
    description: "fancy",
    address: "1214 tokyo way",
    isOpenNow: true,
    rating: <StarRating disabled={false} maxStars={5} />,
  },
  {
    name: "ruth chris",
    description: "getting lucky",
    address: "8956 salt bae st",
    isOpenNow: true,
    rating: <StarRating disabled={false} maxStars={5} />,
  },
];

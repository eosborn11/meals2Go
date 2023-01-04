import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = new Promise((resolve, reject) => {
  const location = "37.7749295,-122.4194155";
  const mock = mocks[location];
  if (!mock) {
    reject("not found");
  }
  resolve(mock);
});
export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};

import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  const mock = mocks[location];
  new Promise((resolve, reject) => {
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(mappedResults);
};
// restaurantRequest()
//   .then(restaurantTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     return err;
//   });

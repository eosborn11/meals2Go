import { mocks } from "./mock";
import camelize from "camelize";

// export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
// console.log("request");
export const restaurantRequest = new Promise((resolve, reject) => {
  const location = "37.7749295,-122.4194155";
  const mock = mocks[location];
  if (!mock) {
    reject("not found");
  }
  resolve(mock);
  // console.log("mocks", mock);
});
// };
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

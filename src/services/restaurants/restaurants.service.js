import { mocks } from "./mock";
export const restaurantRequest = (location) => {
  const mock = mocks[location];
  new Promise((resolve, reject) => {
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
restaurantRequest().then((result) => {});

import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

export const restaurantTabBarIcon = ({ color, size }) => {
  return <MaterialCommunityIcons name="food" size={size} color={color} />;
};

export const mapTabBarIcon = ({ color, size, name }) => {
  return (
    <MaterialCommunityIcons
      name="map-marker-multiple"
      size={size}
      color={color}
    />
  );
};

export const previousOrderTabBarIcon = ({ color, size, name }) => {
  return <Fontisto name="preview" size={size} color={color} />;
};

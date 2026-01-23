import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = (percentage: number) => {
  return (width * percentage) / 100;
};

export const hp = (percentage: number) => {
  return (height * percentage) / 100;
};

export const rf = (size: number) => {
  const scale = width / 375;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

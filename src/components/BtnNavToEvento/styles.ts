import { useState } from "react";
import { ViewStyle, TextStyle } from "react-native";

interface ButtonStyles {
  verEventoButton: ViewStyle;
  textVerEventoButton: TextStyle;
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useButtonStyles = () => {
  const [isPressed, setIsPressed] = useState(false);

  const verEventoButton: ViewStyle = {
    justifyContent: "center",
    backgroundColor: isPressed
      ? "rgba(0, 128, 255, 0.7)"
      : "rgba(0, 128, 255, 1)",
    padding: 10,
    marginHorizontal: 50,
    marginVertical: 5,
    borderRadius: 20,
  };

  const textVerEventoButton: TextStyle = {
    color: "white",
    textAlign: "center",
  };

  return {
    verEventoButton,
    textVerEventoButton,
    setIsPressed,
  } as ButtonStyles;
};

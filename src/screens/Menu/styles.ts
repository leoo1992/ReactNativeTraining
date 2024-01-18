import { useState } from "react";
import { ViewStyle, TextStyle } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    justifyContent: "center",
  },
});

interface ButtonStyles {
  AgendarEventoButton: ViewStyle;
  textAgendarEventoButton: TextStyle;
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useButtonStyles = () => {
  const [isPressed, setIsPressed] = useState(false);

  const AgendarEventoButton: ViewStyle = {
    justifyContent: "center",
    backgroundColor: isPressed ? "rgba(0, 128, 255, 0.7)" : "rgba(0, 128, 255, 1)",
    padding: 10,
    margin: 50,
    borderRadius: 20,
  };

  const textAgendarEventoButton: TextStyle = {
    color: "white",
    textAlign: "center",
  };

  return {
    AgendarEventoButton,
    textAgendarEventoButton,
    setIsPressed,
  } as ButtonStyles;
};

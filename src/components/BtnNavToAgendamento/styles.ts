import { useState } from "react";
import { ViewStyle, TextStyle } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    iconPlus: {
        textAlign: "center",
        padding: 0,
        margin: 0,
        fontSize: 25,
        color: "lime"
      },
    
    
      buttonPlus: {
        backgroundColor: "#000",
        borderRadius: 25,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "lime",
        margin:5,
        position: "absolute",
        bottom: 5,
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
    marginHorizontal: 50,
    marginVertical: 5,
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

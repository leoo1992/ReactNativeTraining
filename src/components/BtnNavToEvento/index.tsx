import React from "react";
import { Pressable, Text } from "react-native";
import { useButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BtnNavToEvento() {
  const navigation = useNavigation();
  const buttonStyles = useButtonStyles();

  function openHome() {
    navigation.navigate("Eventos");
  }

  return (
    <Pressable
      onPress={openHome}
      onPressIn={() => buttonStyles.setIsPressed(true)}
      onPressOut={() => buttonStyles.setIsPressed(false)}
      style={buttonStyles.verEventoButton}
    >
      <Text style={buttonStyles.textVerEventoButton}>Ver Eventos</Text>
    </Pressable>
  );
}

import React from "react";
import { Pressable, Text } from "react-native";
import { useButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BtnNavToAgendamento() {
  const navigation = useNavigation();
  const buttonStyles = useButtonStyles();

  function openHome() {
    navigation.navigate("Agendamento");
  }

  return (
    <Pressable
      onPress={openHome}
      onPressIn={() => buttonStyles.setIsPressed(true)}
      onPressOut={() => buttonStyles.setIsPressed(false)}
      style={buttonStyles.AgendarEventoButton}
    >
      <Text style={buttonStyles.textAgendarEventoButton}>Agendar Evento</Text>
    </Pressable>
  );
}

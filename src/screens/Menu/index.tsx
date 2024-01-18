import React from "react";
import { View, Pressable, Text } from "react-native";
import { styles, useButtonStyles} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Menu() {
  const navigation = useNavigation();
  const buttonStyles = useButtonStyles();

  function openHome() {
    navigation.navigate("Agendamento");
  }

  return (
    <View key="App" style={styles.containerApp}>
      <Pressable
        onPress={openHome}
        onPressIn={() => buttonStyles.setIsPressed(true)}
        onPressOut={() => buttonStyles.setIsPressed(false)}
        style={buttonStyles.AgendarEventoButton}
      >
        <Text style={buttonStyles.textAgendarEventoButton}>Agendar Evento</Text>
      </Pressable>
    </View>
  );
}

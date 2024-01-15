import { Text, TextInput } from "react-native";
import { styles, theme } from "./styles";

export function InputNameEvent() {
  return (
    <>
      <Text key="TextEventName" style={styles.textTitle}>
        Nome do Evento:
      </Text>
      <TextInput
        key="inputParticipante"
        style={styles.input}
        placeholderTextColor={styles.placeholderTextColorStyles.color}
        keyboardAppearance={theme}
        inputMode="text"
      />
    </>
  );
}




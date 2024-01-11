import { Text, TextInput } from "react-native";
import { styles } from "../../styles";

export function InputNameEvent() {
  return (
    <>
      <Text key="TextEventName" style={styles.textTitle}>
        Nome do Evento:
      </Text>
      <TextInput
        key="inputParticipante"
        style={styles.input}
        placeholderTextColor="#6B6B6B"
        keyboardAppearance="dark"
        inputMode="text"
      />
    </>
  );
}

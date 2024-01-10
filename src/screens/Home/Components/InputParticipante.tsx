import { Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles";
import "./inputParticipante.css";

export function InputParticipante() {
  return (
    <>
      <Text key="TextParticipante" style={styles.textTitle}>
        Nome do Participante:
      </Text>
      <div className="divInputButton">
        <TextInput
          key="inputParticipante"
          style={styles.inputParticipante}
          placeholderTextColor="#6B6B6B"
          keyboardAppearance="dark"
          inputMode="text"
        />
        <div className="button-hover">
          <Pressable style={styles.buttonAdd} key="buttonAdd">
            <Text style={styles.textButton}>
              <span>+</span>
            </Text>
          </Pressable>
        </div>
      </div>
    </>
  );
}

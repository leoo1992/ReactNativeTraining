import { Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./styles";
import "./ParticipanteInput.css";

type Props = {
  onAdd: () => void;
};

export function InputParticipante({onAdd}: Props) {

  return (
    <>
      <Text key="TextParticipante" style={styles.textTitle}>
        Nome do Participante:
      </Text>

      <View style={styles.formParticipante}>
        <TextInput
          key="inputParticipante"
          style={styles.inputParticipante}
          placeholderTextColor="#6B6B6B"
          keyboardAppearance="dark"
          inputMode="text"
        />
        <div className="button-hover">
          <Pressable
            key="buttonAdd"
            onPress={onAdd}
            style={styles.buttonAdd}
          >
            <Text style={styles.textButton}>
              <span>+</span>
            </Text>
          </Pressable>
        </div>
      </View>
    </>
  );
}

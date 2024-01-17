import { Text, TextInput, Pressable, View } from "react-native";
import { styles, iconStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  onAdd: () => void;
};

export function InputParticipante({ onAdd }: Props) {
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
        <View>
          <Pressable
            key="buttonAdd"
            onPress={onAdd}
            style={styles.buttonAdd}
            accessible={true}
            role="button"
          >
            <Icon name="plus" {...iconStyles} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

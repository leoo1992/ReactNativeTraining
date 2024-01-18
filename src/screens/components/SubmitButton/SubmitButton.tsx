import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function SubmitButton() {
  return (
    <Pressable style={styles.container} accessible={true} role="button">
      <View style={styles.button}>
        <Text style={styles.title}>Enviar</Text>
      </View>
    </Pressable>
  );
}

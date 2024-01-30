import { styles } from "./styles";
import { View, Text } from "react-native";

export function ListaEventosVazia() {
  return (
    <View style={styles.containerApp}>
      <Text style={styles.textEventEmpty}>Não há eventos cadastrados</Text>
    </View>
  );
}

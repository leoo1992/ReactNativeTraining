import { styles } from "./styles";
import { View, Text } from "react-native";

export function ListaParticipantsVazia() {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.textEmptyList}>Adicione participantes para</Text>
      <Text style={styles.textEmptyList}>preencher a lista.</Text>
    </View>
  );
}

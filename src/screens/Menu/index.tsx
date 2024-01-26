import { View } from "react-native";
import { styles } from "./styles";
import { BtnNavToAgendamento } from "../../components/BtnNavToAgendamento/BtnNavToAgendamento";
import { BtnNavToEvento } from "../../components/BtnNavToEvento";

export function Menu() {
  return (
    <View key="App" style={styles.containerApp}>
      <BtnNavToAgendamento />
      <BtnNavToEvento />
    </View>
  );
}

import { styles } from "./styles";
import { View } from "react-native";
import { InputDateEvent } from "./Components/InputDateEvent";
import { InputNameEvent } from "./Components/InputNameEvent";
import { InputParticipante } from "./Components/InputParticipante";

export function Home() {
  return (
    <View key="App" style={styles.containerApp}>
      <InputNameEvent />
      <InputDateEvent />
      <InputParticipante />
    </View>
  );
}

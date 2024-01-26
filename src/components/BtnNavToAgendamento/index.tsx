import { styles } from "./styles";
import { TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export function BtnNavToAgendamento() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonPlus}
      onPress={() => {
        navigation.navigate("Agendamento");
      }}
    >
      <Icon name="add" style={styles.iconPlus} />
    </TouchableOpacity>
  );
}

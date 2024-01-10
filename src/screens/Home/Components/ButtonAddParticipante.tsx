import { styles } from "../styles";
import { Text, Pressable } from "react-native";

export function ButtonAddParticipante() {
  return (
    <div className="button-hover">
      <Pressable style={styles.buttonAdd} key="buttonAdd">
        <Text style={styles.textButton}>
          <span>+</span>
        </Text>
      </Pressable>
    </div>
  );
}

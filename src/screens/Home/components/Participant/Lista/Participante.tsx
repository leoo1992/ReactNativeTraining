import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import "./Participante.css";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participante({ name, onRemove }: Props) {


  return (
    <View style={styles.containerLista}>
      <Text style={styles.nameParticipante}>{name}</Text>
      <div className="button-hover">
        <Pressable
          key="buttonAdd"
          onPress={onRemove}
          style={styles.buttonRemove}
        >
          <Text style={styles.textButton}>
            <span>-</span>
          </Text>
        </Pressable>
      </div>
    </View>
  );
}

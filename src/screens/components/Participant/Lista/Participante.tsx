import { View, Text, Pressable } from "react-native";
import { styles, iconStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participante({ name, onRemove }: Props) {
  return (
    <View style={styles.containerLista}>
      <Text style={styles.nameParticipante}>{name}</Text>
      <View>
        <Pressable
          key="buttonAdd"
          onPress={onRemove}
          style={styles.buttonRemove}
          accessible={true}
          role="button"
        >
          <Icon name="trash-o" {...iconStyles} />
        </Pressable>
      </View>
    </View>
  );
}

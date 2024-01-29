import { View, Text, Pressable } from "react-native";
import { styles, iconStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialIcons";

type Props = {
  name: string;
  onRemove: () => any | void;
};

export function Participante({ name, onRemove }: Props) {
  return (
    <View style={styles.containerLista}>
      <IconM name="person-pin" size={20} style={styles.icon} />
      <Text style={styles.nameParticipante}>{name}</Text>
      <View>
        <Pressable
          key="buttonRemove"
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

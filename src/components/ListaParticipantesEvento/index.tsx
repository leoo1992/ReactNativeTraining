import React from "react";
import { View, Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";

const ListaParticipantesEvento = ({ participant, participantIndex }: any) => {
  return (
    <View style={styles.containerParticipants}>
      <Icon name="person-pin" size={20} color="lime" style={styles.icon} />
      <Animated.Text style={styles.textEvents} key={participantIndex}>
        {participant}
      </Animated.Text>
    </View>
  );
};

export default ListaParticipantesEvento;

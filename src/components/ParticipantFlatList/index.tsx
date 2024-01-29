import { FlatList } from "react-native";
import { styles } from "./styles";
import { Participante } from "../Participant/Lista/Participante";
import { ListaParticipantsVazia } from "../ListaParticipantsVazia";

export const ParticipantFlatList = ({
  participant,
  setParticipantDel,
}: any) => {
  return (
    <FlatList
      style={styles.flatList}
      data={participant}
      keyExtractor={(index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <ListaParticipantsVazia />}
      renderItem={({ item, index }) => (
        <Participante
          key={index.toString()}
          name={item}
          onRemove={() => {
            setParticipantDel(item);
          }}
        />
      )}
    />
  );
};

import { styles } from "./styles";
import { View, FlatList, Text, Alert } from "react-native";
import { InputNameEvent } from "./components/InputNameEvent/InputNameEvent";
import { InputDateEvent } from "./components/InputDateEvent/InputDateEvent";
import { InputParticipante } from "./components/Participant/Input/InputParticipante";
import { Participante } from "./components/Participant/Lista/Participante";
import { SubmitButton } from "./components/SubmitButton/SubmitButton";
import { Social } from "./components/Icons/Social";

export function Home() {
  const participantes: string[] = ["Diego", "Ciclano", "Fulano"];

  function handleAddParticipante() {
    if (participantes.includes("Leonardo")) {
      return Alert.alert(
        "Participante existente",
        "Já existe p articipantecom o nome."
      );
    }

    Alert.alert("Adicionado", "Participante adicionado a lista de presença");
  }

  function handleRemoveParticipante(name: string) {
    Alert.alert("Remover ", "Remover o participante " + name + "?", [
      {
        text: "Sim",
        onPress: () =>
          Alert.alert(
            "Removido",
            "Participante " + name + " removido da lista de presença"
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View key="App" style={styles.containerApp}>
      <InputNameEvent />
      <InputDateEvent />

      <InputParticipante onAdd={handleAddParticipante} />

      <FlatList
        data={participantes}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text style={styles.textEmptyList}>
              Adicione participantes ao evento
            </Text>
            <Text style={styles.textEmptyList}>
              para ter sua lista de presença.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Participante
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipante(item)}
          />
        )}
      />
      <View style={styles.buttonGroup}>
        <SubmitButton />
        <Social />
      </View>
    </View>
  );
}

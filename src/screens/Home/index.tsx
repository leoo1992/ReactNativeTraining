import React, { useState } from "react";
import { styles } from "./styles";
import { View, FlatList, Text, Alert } from "react-native";
import { InputNameEvent } from "./components/InputNameEvent/InputNameEvent";
import { InputDateEvent } from "./components/InputDateEvent/InputDateEvent";
import { InputParticipante } from "./components/Participant/Input/InputParticipante";
import { Participante } from "./components/Participant/Lista/Participante";
import { SubmitButton } from "./components/SubmitButton/SubmitButton";
import { Social } from "./components/Icons/Social";
import { Dialog } from "@rneui/themed";

export function Home() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  const toggleDialog3 = () => {
    setVisible3(!visible3);
  };

  const toggleDialog4 = () => {
    setVisible3(false);
    setVisible4(!visible4);
  };

  const participantes: string[] = ["Diego"];

  function handleAddParticipante() {
    if (participantes.includes("Leonardo")) {
      toggleDialog1();
    }

    participantes.push("Leonardo");
    toggleDialog2();
    console.log(participantes);
  }

  function handleRemoveParticipante(name: string) {
    toggleDialog3();
  }

  return (
    <View key="App" style={styles.containerApp}>
      <>
        <Dialog
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
          animationType="fade"
        >
          <View style={styles.dialogTheme}></View>
          <Dialog.Title title="Participante existente" />
          <Text style={styles.textDialog}>
            Já existe p articipantecom o nome.
          </Text>
        </Dialog>

        <Dialog
          isVisible={visible2}
          onBackdropPress={toggleDialog2}
          animationType="fade"
        >
          <View style={styles.dialogTheme}>
            <Dialog.Title title="Adicionado" />
            <Text style={styles.textDialog}>
              Participante adicionado a lista de presença
            </Text>
          </View>
        </Dialog>

        <Dialog
          isVisible={visible3}
          onBackdropPress={toggleDialog3}
          animationType="fade"
        >
          <View style={styles.dialogTheme}></View>
          <Dialog.Title title="Remover" />
          <Text style={styles.textDialog}>
            Tem certeza que deseja remover o participante ?
          </Text>
          <Dialog.Actions>
            <Dialog.Button title="Sim" onPress={() => toggleDialog4()} />
            <Dialog.Button title="Não" onPress={() => toggleDialog3()} />
          </Dialog.Actions>
        </Dialog>

        <Dialog
          isVisible={visible4}
          onBackdropPress={toggleDialog4}
          animationType="fade"
        >
          <View style={styles.dialogTheme}></View>
          <Dialog.Title title="Removido" />
          <Text style={styles.textDialog}>
            Participante removido da lista de presença
          </Text>
        </Dialog>
      </>

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

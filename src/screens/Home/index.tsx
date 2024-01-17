import React, { useState } from "react";
import { styles } from "./styles";
import { View, FlatList, Text, Pressable } from "react-native";
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
  const [participantes, setParticipantes] = useState(["Leonardo"]);

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

   function handleAddParticipante() {
    if (participantes.includes("Leo")) {
      return toggleDialog1();
    }

    setParticipantes(prevState => [...prevState,'José'])
    toggleDialog2();
  }

  function handleRemoveParticipante(name: string) {
    toggleDialog3();
  }

  return (
    <View key="App" style={styles.containerApp}>
      <>
        <Dialog
          style={{ pointerEvents: visible1 ? "auto" : "none" }}
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
          key={Math.random()}
          pointerEvents={visible1 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialog}>
            Já existe participante com este nome
          </Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => toggleDialog1()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>

        <Dialog
          style={{ pointerEvents: visible2 ? "auto" : "none" }}
          isVisible={visible2}
          onBackdropPress={toggleDialog2}
          key={Math.random()}
          pointerEvents={visible2 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialog}>
            Participante adicionado a lista de presença
          </Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => toggleDialog2()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>

        <Dialog
          style={{ pointerEvents: visible3 ? "auto" : "none" }}
          isVisible={visible3}
          onBackdropPress={toggleDialog3}
          key={Math.random()}
          pointerEvents={visible3 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialog}>
            Tem certeza que deseja remover o participante ?
          </Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonSim}
              onPress={() => toggleDialog4()}
            >
              <Text style={styles.dialogButtonText}>Sim</Text>
            </Pressable>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => toggleDialog3()}
            >
              <Text style={styles.dialogButtonText}>Não</Text>
            </Pressable>
          </View>
        </Dialog>

        <Dialog
          style={{ pointerEvents: visible4 ? "auto" : "none" }}
          isVisible={visible4}
          onBackdropPress={toggleDialog4}
          key={Math.random()}
          pointerEvents={visible4 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialog}>
            Participante removido da lista de presença
          </Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => toggleDialog4()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>
      </>

      <InputNameEvent />
      <InputDateEvent />
      <InputParticipante onAdd={handleAddParticipante} />

      <FlatList
        style={styles.flatList}
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

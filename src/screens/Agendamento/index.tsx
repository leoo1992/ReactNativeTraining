import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import {
  View,
  FlatList,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { InputNameEvent } from "../components/InputNameEvent/InputNameEvent";
import { InputDateEvent } from "../components/InputDateEvent/InputDateEvent";
import { InputParticipante } from "../components/Participant/Input/InputParticipante";
import { Participante } from "../components/Participant/Lista/Participante";
import { SubmitButton } from "../components/SubmitButton/SubmitButton";
import { Social } from "../components/Icons/Social";
import { Dialog } from "@rneui/themed";

export function Agendamento() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [delParticipant, setDelParticipant] = useState(false);
  const [participant, setParticipant] = useState<string[]>([]);
  const [participantDel, setParticipantDel] = useState<string | null>(null);

  const Dialog1 = () => setV1(!v1);
  const Dialog2 = () => setV2(!v2);
  const Dialog3 = () => setV3(!v3);
  const Dialog4 = () => {
    setV3(false);
    setV4(!v4);
  };

  function handleAddParticipant(participantNome: string) {
    if (participant.includes(participantNome)) {
      return Dialog1();
    }
    setParticipant((prevState) => [...prevState, participantNome]);
    Dialog2();
  }

  const removeParticipant = () => {
    if (participantDel) {
      setParticipant((prevState) =>
        prevState.filter((nome) => nome !== participantDel)
      );
      Dialog4();
      setParticipantDel(null);
    }
  };

  useEffect(() => {
    if (delParticipant) {
      removeParticipant();
      setDelParticipant(false);
    }
  }, [delParticipant]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View key="App" style={styles.containerApp}>
        <>
          <Dialog
            style={{ pointerEvents: v1 ? "auto" : "none" }}
            isVisible={v1}
            onBackdropPress={Dialog1}
            key={Math.random()}
            pointerEvents={v1 ? "auto" : "none"}
            role="dialog"
          >
            <Text style={styles.textDialog}>
              Já existe participante com este nome
            </Text>
            <View style={styles.dialogButtonsGroup}>
              <Pressable
                style={styles.dialogButtonNão}
                onPress={() => Dialog1()}
              >
                <Text style={styles.dialogButtonText}>Ok</Text>
              </Pressable>
            </View>
          </Dialog>
          <Dialog
            style={{ pointerEvents: v2 ? "auto" : "none" }}
            isVisible={v2}
            onBackdropPress={Dialog2}
            key={Math.random()}
            pointerEvents={v2 ? "auto" : "none"}
            role="dialog"
          >
            <Text style={styles.textDialog}>
              Participante adicionado a lista de presença
            </Text>
            <View style={styles.dialogButtonsGroup}>
              <Pressable
                style={styles.dialogButtonNão}
                onPress={() => Dialog2()}
              >
                <Text style={styles.dialogButtonText}>Ok</Text>
              </Pressable>
            </View>
          </Dialog>
          <Dialog
            style={{ pointerEvents: v3 ? "auto" : "none" }}
            isVisible={v3}
            onBackdropPress={() => {
              setParticipantDel(null);
              Dialog3();
            }}
            key={Math.random()}
            pointerEvents={v3 ? "auto" : "none"}
            role="dialog"
          >
            <Text style={styles.textDialog}>
              Tem certeza que deseja remover o participante?
            </Text>
            <View style={styles.dialogButtonsGroup}>
              <Pressable
                style={styles.dialogButtonNão}
                onPress={() => {
                  setParticipantDel(null);
                  Dialog3();
                }}
              >
                <Text style={styles.dialogButtonText}>Não</Text>
              </Pressable>
              <Pressable
                style={styles.dialogButtonSim}
                onPress={() => {
                  removeParticipant();
                  Dialog3();
                }}
              >
                <Text style={styles.dialogButtonText}>Sim</Text>
              </Pressable>
            </View>
          </Dialog>
          <Dialog
            style={{ pointerEvents: v4 ? "auto" : "none" }}
            isVisible={v4}
            onBackdropPress={Dialog4}
            key={Math.random()}
            pointerEvents={v4 ? "auto" : "none"}
            role="dialog"
          >
            <Text style={styles.textDialog}>
              Participante removido da lista de presença
            </Text>
            <View style={styles.dialogButtonsGroup}>
              <Pressable
                style={styles.dialogButtonNão}
                onPress={() => Dialog4()}
              >
                <Text style={styles.dialogButtonText}>Ok</Text>
              </Pressable>
            </View>
          </Dialog>
        </>
        <InputNameEvent />
        <InputDateEvent />
        <InputParticipante
          onAdd={(participantNome: string) =>
            handleAddParticipant(participantNome)
          }
        />
        <FlatList
          style={styles.flatList}
          data={participant}
          keyExtractor={(index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Text style={styles.textEmptyList}>
                Adicione participantes para
              </Text>
              <Text style={styles.textEmptyList}>preencher a lista.</Text>
            </View>
          )}
          renderItem={({ item, index }) => (
            <Participante
              key={index.toString()}
              name={item}
              onRemove={() => {
                setParticipantDel(item);
                Dialog3();
              }}
            />
          )}
        />
        <View style={styles.buttonGroup}>
          <SubmitButton />
          <Social />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import {
  View,
  FlatList,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { InputNameEvent } from "../../components/InputNameEvent/InputNameEvent";
import { InputDateEvent } from "../../components/InputDateEvent/InputDateEvent";
import { InputParticipante } from "../../components/Participant/Input/InputParticipante";
import { Participante } from "../../components/Participant/Lista/Participante";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { Social } from "../../components/Icons/Social";
import { Dialog } from "@rneui/themed";
import { CustomDialog } from "../../components/CustomDialog";

export function Agendamento() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [v5, setV5] = useState(false);
  const [delParticipant, setDelParticipant] = useState(false);
  const [participantDel, setParticipantDel] = useState<string | null>(null);
  const [clearInputRef, setClearInputRef] = useState(false);
  const inputRefNameEvent = useRef<TextInput>(null);
  const navigation = useNavigation();

  const [participant, setParticipant] = useState<string[]>([]);
  const [nameEvent, setNameEvent] = useState<string>("");
  function formatarData(data: Date) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}-${mes}-${ano}`;
  }

  const dataAtual = new Date();
  const dataFormatada = formatarData(dataAtual);
  const [dateEvent, setDateEvent] = useState<string>(dataFormatada);

  const Dialog1 = () => setV1(!v1);
  const Dialog2 = () => setV2(!v2);
  const Dialog3 = () => setV3(!v3);
  const Dialog4 = () => {
    setV3(false);
    setV4(!v4);
  };
  const Dialog5 = () => setV5(!v5);

  function AddParticipant(participantNome: string) {
    if (participant.includes(participantNome)) {
      return Dialog1();
    }

    if (!participant) {
      return Dialog5();
    }

    if (
      participantNome === null ||
      participantNome === undefined ||
      participantNome.trim() === ""
    ) {
      return Dialog5();
    }

    setParticipant((prevState) => [...prevState, participantNome]);
    Dialog2();
  }

  function handleAddEvent(EventNome: string) {
    setNameEvent(EventNome);
  }

  function handleAddEventDate(EventDate: string) {
    setDateEvent(EventDate);
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

  const clearEventNameInput = () => {
    setClearInputRef(true);
    inputRefNameEvent.current?.clear();
    setNameEvent("");
  };

  const handleSubmitForm = ({
    index,
    participant,
    nameEvent,
    dateEvent,
  }: any) => {
    const eventData = {
      index,
      nameEvent,
      dateEvent,
      participants: participant,
    };

    navigation.navigate("Eventos", { eventData });

    setParticipant([]);
    setDateEvent(dataFormatada);
    setClearInputRef(false);
  };

  useEffect(() => {
    if (delParticipant) {
      removeParticipant();
      setDelParticipant(false);
    }

    if (clearInputRef) {
      clearEventNameInput();
    }
  }, [delParticipant, clearInputRef]);

  useFocusEffect(
    useCallback(() => {
      setParticipant([]);
      setNameEvent("");
      setDateEvent(dataFormatada);
      setDelParticipant(false);
      setParticipantDel(null);
      setClearInputRef(false);
      setV1(false);
      setV2(false);
      setV3(false);
      setV4(false);
      setV5(false);
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View key="App" style={styles.containerApp}>
        <>
          <CustomDialog
            isVisible={v1}
            onBackdropPress={Dialog1}
            buttonText="Ok"
          >
            <Text style={styles.textDialog}>
              Já existe participante com este nome
            </Text>
          </CustomDialog>
          <CustomDialog
            isVisible={v2}
            onBackdropPress={Dialog2}
            buttonText="Ok"
          >
            <Text style={styles.textDialog}>
              Participante adicionado à lista de presença
            </Text>
          </CustomDialog>
          <CustomDialog
            isVisible={v3}
            onBackdropPress={() => setParticipantDel(null)}
            buttonText="Não"
          >
            <Text style={styles.textDialog}>
              Tem certeza que deseja remover o participante?
            </Text>
          </CustomDialog>
          <CustomDialog
            isVisible={v4}
            onBackdropPress={Dialog4}
            buttonText="Ok"
          >
            <Text style={styles.textDialog}>
              Participante removido da lista de presença
            </Text>
          </CustomDialog>
          <CustomDialog
            isVisible={v5}
            onBackdropPress={Dialog5}
            buttonText="Ok"
          >
            <Text style={styles.textDialog}>
              Digite um nome para o participante.
            </Text>
          </CustomDialog>
        </>
        <>
          <InputNameEvent
            onAddEvent={(EventNome: string) => handleAddEvent(EventNome)}
            clearInput={clearInputRef}
            inputRef={inputRefNameEvent}
            onSubmitEditing={handleSubmitForm}
          />
          <InputDateEvent
            onAddDate={(EventDate: string) => handleAddEventDate(EventDate)}
            onSubmitEditing={handleSubmitForm}
          />
          <InputParticipante
            onAdd={(participantNome: string) => AddParticipant(participantNome)}
            onSubmitEditing={handleSubmitForm}
          />
        </>
        <>
          <FlatList
            style={styles.flatList}
            data={participant}
            keyExtractor={(index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              // TODO: Componentizar
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
        </>
        <View style={styles.buttonGroup}>
          <SubmitButton
            participant={participant}
            nameEvent={nameEvent}
            dateEvent={dateEvent}
            onSubmit={handleSubmitForm}
          />
          <Social />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

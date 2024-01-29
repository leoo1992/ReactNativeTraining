import { useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./styles";
import { ViewController } from "./ViewController";

import { DialogGroup } from "../../components/DialogGroup";
import { InputsUnificados } from "../../components/InputsUnificados";
import { ParticipantFlatList } from "../../components/ParticipantFlatList";
import { SubmitButton } from "../../components/SubmitButton";

export function Agendamento() {
  const {
    v1,
    v2,
    v3,
    v4,
    v5,
    Dialog1,
    Dialog2,
    Dialog3,
    Dialog4,
    Dialog5,
    closeDialog3,
    resetParticipantDel,
    handleConfirmRemove,
    AddParticipant,
    handleAddEvent,
    handleAddEventDate,
    removeParticipant,
    clearEventNameInput,
    handleSubmitForm,
    inputRefNameEvent,
    participant,
    nameEvent,
    dateEvent,
    clearInputRef,
    delParticipant,
    setDelParticipant,
    setParticipantDel,
  } = ViewController();

  useEffect(() => {
    if (delParticipant) {
      removeParticipant();
      setDelParticipant(false);
    }

    if (clearInputRef) {
      clearEventNameInput();
    }
  }, [delParticipant, clearInputRef, participant]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View key="App" style={styles.containerApp}>
        <>
          <DialogGroup
            v1={v1}
            v2={v2}
            v3={v3}
            v4={v4}
            v5={v5}
            Dialog1={Dialog1}
            Dialog2={Dialog2}
            Dialog3={handleConfirmRemove}
            handleConfirmRemove={handleConfirmRemove}
            Dialog4={Dialog4}
            Dialog5={Dialog5}
            closeDialog3={closeDialog3}
            resetParticipantDel={resetParticipantDel}
            setDelParticipant={setDelParticipant}
          />
        </>
        <>
          <InputsUnificados
            onAddEvent={(EventNome: any) => handleAddEvent(EventNome)}
            onAddDate={(EventDate: any) => handleAddEventDate(EventDate)}
            onAddParticipant={(participantNome: any) =>
              AddParticipant(participantNome)
            }
            clearInput={clearInputRef}
            inputRef={inputRefNameEvent}
            onSubmitEditing={handleSubmitForm}
          />
        </>
        <>
          <ParticipantFlatList
            participant={participant}
            setParticipantDel={(item: any) => {
              setParticipantDel(item);
              Dialog3();
            }}
          />
        </>
        <>
          <SubmitButton
            participant={participant}
            nameEvent={nameEvent}
            dateEvent={dateEvent}
            onSubmit={handleSubmitForm}
          />
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}

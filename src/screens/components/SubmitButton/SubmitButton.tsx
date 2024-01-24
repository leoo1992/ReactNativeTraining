import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Dialog } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export function SubmitButton({
  participant,
  nameEvent,
  dateEvent,
  onSubmit,
}: any) {
  const navigation = useNavigation();
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);

  const DialogS1 = () => setS1(!s1);
  const DialogS2 = () => setS2(!s2);
  const DialogS3 = () => setS3(!s3);

  function handleSubmit() {
    const isAnyParticipantExceedsLimit = participant.some(
      (p: any[]) => p.length > 20
    );

    if (
      dateEvent &&
      nameEvent &&
      participant &&
      participant.length > 0 &&
      !(nameEvent.length >= 35) &&
      !isAnyParticipantExceedsLimit
    ) {
      DialogS1();
    } else if (nameEvent.length >= 35 || isAnyParticipantExceedsLimit) {
      DialogS3();
    } else {
      DialogS2();
    }
  }
  function openMenu() {
    DialogS1();
    onSubmit({ participant, nameEvent, dateEvent });

    const eventData = {
      nameEvent,
      dateEvent,
      participants: participant,
    };

    navigation.navigate("ListaEvento", { eventData });
    participant = [];
    nameEvent = "";
    dateEvent = "";
  }

  return (
    <>
      <>
        <Dialog
          style={{ pointerEvents: s1 ? "auto" : "none" }}
          isVisible={s1}
          onBackdropPress={DialogS1}
          key={Math.random()}
          pointerEvents={s1 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialogTitle}>Evento Agendado</Text>
          <Text style={styles.textDialog}>Nome do evento: </Text>
          <Text style={styles.textDialogValue}>{nameEvent}</Text>
          <Text style={styles.textDialog}>Data do evento: </Text>
          <Text style={styles.textDialogValue}>{dateEvent}</Text>
          <Text style={styles.textDialog}>Participantes: </Text>

          {participant.map((p: string, index: string) => (
            <Text key={index} style={styles.textDialogValue}>
              {p}
            </Text>
          ))}

          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => openMenu()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>

        <Dialog
          style={{ pointerEvents: s2 ? "auto" : "none" }}
          isVisible={s2}
          onBackdropPress={DialogS2}
          key={Math.random()}
          pointerEvents={s2 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialogTitle2}>Preencha todos os campos</Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => DialogS2()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>

        <Dialog
          style={{ pointerEvents: s3 ? "auto" : "none" }}
          isVisible={s3}
          onBackdropPress={DialogS3}
          key={Math.random()}
          pointerEvents={s3 ? "auto" : "none"}
          role="dialog"
        >
          <Text style={styles.textDialogTitle2}>
            Verifique o limite de digitos
          </Text>
          <View style={styles.dialogButtonsGroup}>
            <Pressable
              style={styles.dialogButtonNão}
              onPress={() => DialogS3()}
            >
              <Text style={styles.dialogButtonText}>Ok</Text>
            </Pressable>
          </View>
        </Dialog>
      </>

      <Pressable
        style={styles.container}
        accessible={true}
        role="button"
        onPress={handleSubmit}
      >
        <View style={styles.button}>
          <Text style={styles.title}>Enviar</Text>
        </View>
      </Pressable>
    </>
  );
}

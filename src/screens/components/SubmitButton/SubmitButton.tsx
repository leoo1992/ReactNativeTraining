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

  const DialogS1 = () => setS1(!s1);
  const DialogS2 = () => setS2(!s2);

  function handleSubmit() {
    if (dateEvent && nameEvent && participant && participant.length > 0) {
      DialogS1();  
    } else DialogS2();
  }

  function openMenu() {
    DialogS1();
    onSubmit({ participant, nameEvent, dateEvent });
    participant = [];
    nameEvent = "";
    dateEvent = "";
    navigation.navigate("Menu");
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

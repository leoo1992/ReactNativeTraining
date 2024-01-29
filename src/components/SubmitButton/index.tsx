import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { GitHubLinkIcon } from "../GitHubLinkIcon";
import { DialogsGroupSubmit } from "../DialogsGroupSubmit";

export function SubmitButton({
  index,
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
      !(nameEvent.length >= 30) &&
      !isAnyParticipantExceedsLimit
    ) {
      DialogS1();
    } else if (nameEvent.length >= 30 || isAnyParticipantExceedsLimit) {
      DialogS3();
    } else {
      DialogS2();
    }
  }
  function openMenu() {
    DialogS1();
    onSubmit({ index, participant, nameEvent, dateEvent });

    const eventData = {
      index,
      nameEvent,
      dateEvent,
      participants: participant,
    };

    navigation.navigate("Eventos", { eventData });
    participant = [];
    nameEvent = "";
    dateEvent = new Date();
  }

  return (
    <View style={styles.buttonGroup}>
      <>
        <DialogsGroupSubmit
          s1={s1}
          s2={s2}
          s3={s3}
          DialogS1={DialogS1}
          DialogS2={DialogS2}
          DialogS3={DialogS3}
          openMenu={openMenu}
          nameEvent={nameEvent}
          dateEvent={dateEvent}
          participant={participant}
        />
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
      <GitHubLinkIcon />
    </View>
  );
}

import { Text, View, Pressable } from "react-native";
import { Dialog } from "@rneui/themed";
import { styles } from "./styles";

export const DialogsGroupSubmit = ({
  s1,
  s2,
  s3,
  DialogS1,
  DialogS2,
  DialogS3,
  openMenu,
  nameEvent,
  dateEvent,
  participant,
}: any) => {
  return (
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
        <Text style={styles.textDialog}>Nome: </Text>
        <Text style={styles.textDialogValue}>{nameEvent}</Text>
        <Text style={styles.textDialog}>
          Data: <Text style={styles.textDialogValue}>{dateEvent}</Text>
        </Text>
        <Text style={styles.textDialog}>Participantes: </Text>

        {participant.map((p: string, index: string) => (
          <Text key={index} style={styles.textDialogValue}>
            {p}
          </Text>
        ))}

        <View style={styles.dialogButtonsGroup}>
          <Pressable style={styles.dialogButtonNão} onPress={() => openMenu()}>
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
        <Text style={styles.textDialogTitle2}>Campos requeridos</Text>
        <View style={styles.dialogButtonsGroup}>
          <Pressable style={styles.dialogButtonNão} onPress={() => DialogS2()}>
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
        <Text style={styles.textDialogTitle2}>Verifique os campos</Text>
        <View style={styles.dialogButtonsGroup}>
          <Pressable style={styles.dialogButtonNão} onPress={() => DialogS3()}>
            <Text style={styles.dialogButtonText}>Ok</Text>
          </Pressable>
        </View>
      </Dialog>
    </>
  );
};

import { styles } from "./styles";
import { Text } from "react-native";
import { CustomDialog } from "../../components/CustomDialog";

export const DialogGroup = ({
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
  participantDel,
}: any) => {
  return (
    <>
      <CustomDialog isVisible={v1} onBackdropPress={Dialog1} buttonText="Ok">
        <Text style={styles.textDialog}>
          Já existe esse participante.
        </Text>
      </CustomDialog>
      <CustomDialog isVisible={v2} onBackdropPress={Dialog2} buttonText="Ok">
        <Text style={styles.textDialog}>
          Participante adicionado.
        </Text>
      </CustomDialog>
      <CustomDialog
        isVisible={v3}
        onBackdropPress={() => {
          closeDialog3();
          resetParticipantDel();
        }}
        buttonText="Não"
        onConfirm={() => {
          Dialog3();
        }}
        onConfirmYes={() => {
          handleConfirmRemove(participantDel);
        }}
      >
        <Text style={styles.textDialog}>
          Remover participante?
        </Text>
      </CustomDialog>

      <CustomDialog isVisible={v4} onBackdropPress={Dialog4} buttonText="Ok">
        <Text style={styles.textDialog}>
          Participante Removido.
        </Text>
      </CustomDialog>
      <CustomDialog isVisible={v5} onBackdropPress={Dialog5} buttonText="Ok">
        <Text style={styles.textDialog}>
          Informe um participante.
        </Text>
      </CustomDialog>
    </>
  );
};

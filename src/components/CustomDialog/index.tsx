import { Text, View, Pressable } from "react-native";
import { Dialog } from "@rneui/themed";
import { styles } from "./styles";

export function CustomDialog({
    isVisible,
    onBackdropPress,
    onConfirm,
    buttonText,
    children,
  }: any) {
    return (
      <Dialog
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        key={Math.random()}
        pointerEvents={isVisible ? "auto" : "none"}
        role="dialog"
      >
        {children}
        <View style={styles.dialogButtonsGroup}>
          <Pressable style={styles.dialogButtonNão} onPress={onBackdropPress}>
            <Text style={styles.dialogButtonText}>{buttonText}</Text>
          </Pressable>
          {onConfirm && (
            <Pressable style={styles.dialogButtonSim} onPress={onConfirm}>
              <Text style={styles.dialogButtonText}>Sim</Text>
            </Pressable>
          )}
        </View>
      </Dialog>
    );
  }
  

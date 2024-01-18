import { Text, TextInput } from "react-native";
import { styles, theme } from "./styles";

export function InputDateEvent() {
  const formatDate = (date: string | number | Date) => {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const currentDate = formatDate(new Date());

  return (
    <>
      <Text key="TextDate" style={styles.textTitle}>
        Data do Evento:
      </Text>
      <TextInput
        key="InputDate"
        style={styles.input}
        placeholderTextColor={styles.placeholderTextColorStyles.color}
        keyboardAppearance={theme}
        defaultValue={currentDate}
      />
    </>
  );
}

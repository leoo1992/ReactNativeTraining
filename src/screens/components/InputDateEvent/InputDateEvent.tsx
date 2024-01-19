import React, { useState, useRef } from "react";
import { Text, TextInput, View, Pressable} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles, theme } from "./styles";

export function InputDateEvent() {
  const [isFocusDate, setIsFocusDate] = useState(true);
  const [isFilledDate, setIsFilledDate] = useState(true);

  const inputRefDate = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocusDate(true);
  };

  const handleBlur = () => {
    setIsFocusDate(false);
  };

  const handleChangeText = (text: any) => {
    if (text.trim() === "" || text.trim() === null || text.trim() === undefined) {
      setIsFocusDate(false);
      setIsFilledDate(false);
    } else {
      setIsFocusDate(true);
      setIsFilledDate(true);
    }
  };

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

  const handlePressIn = () => {
    setIsFocusDate(true);
    setIsFilledDate(true);
    inputRefDate.current?.focus();
  };

  return (
    <>
      <Text
        key="TextEventName"
        style={
          isFocusDate || isFilledDate ? styles.textTitle1 : styles.textTitle
        }
      >
        Data do Evento:
      </Text>
      <View style={styles.inputContainer}>
        <Icon
          name="date-range"
          size={20}
          style={isFocusDate || isFilledDate ? styles.icon1 : styles.icon}
        />
        <Pressable onPress={handlePressIn} onPressOut={handleBlur} style={styles.inputButtonClickMask}>
          <TextInput
           ref={inputRefDate}
            key="InputDate"
            style={isFocusDate || isFilledDate ? styles.input1 : styles.input}
            placeholderTextColor="#6B6B6B"
            keyboardAppearance={theme}
            defaultValue={currentDate}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
          />
        </Pressable>
      </View>
    </>
  );
}

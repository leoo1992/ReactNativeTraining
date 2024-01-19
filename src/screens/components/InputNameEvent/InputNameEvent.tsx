import React, { useState, useRef } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles, theme } from "./styles";

export function InputNameEvent() {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRefNameEvent = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChangeText = (text: any) => {
    setIsFilled(!!text);
  };

  const handlePressIn = () => {
    setIsFocus(true);
    inputRefNameEvent.current?.focus();
  };

  return (
    <>
      <Text
        key="TextEventName"
        style={isFocus || isFilled ? styles.textTitle1 : styles.textTitle}
      >
        Nome do Evento:
      </Text>
      <View style={styles.inputContainer}>
        <Icon
          name="edit"
          size={20}
          style={isFocus || isFilled ? styles.icon1 : styles.icon}
        />
        <Pressable onPress={handlePressIn} style={styles.inputButtonClickMask}>
          <TextInput
            ref={inputRefNameEvent}
            key="inputParticipante"
            style={isFocus || isFilled ? styles.input1 : styles.input}
            placeholder="Digite o nome do evento"
            placeholderTextColor={styles.placeholderTextColorStyles.color}
            keyboardAppearance={theme}
            inputMode="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
          />
        </Pressable>
      </View>
    </>
  );
}

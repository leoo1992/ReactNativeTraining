import React, { useState, useEffect, useCallback } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles, theme } from "./styles";

export function InputNameEvent({ onAddEvent, inputRef, clearInput }: any) {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [eventName, setEventName] = useState("");

  useFocusEffect(
    useCallback(() => {
      setIsFocus(false);
      setIsFilled(false);
      setEventName("");
    }, [])
  );

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChangeText = (text: string) => {
    setIsFilled(!!text);
    setEventName(text);
    onAddEvent(text);
  };

  const handlePressIn = () => {
    setIsFocus(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (clearInput) {
      setEventName("");
      onAddEvent("");
    }
  }, [clearInput]);

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
            ref={inputRef}
            key="inputParticipante"
            value={eventName}
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

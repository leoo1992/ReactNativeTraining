import React, { useState, useRef } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import { styles, iconStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialIcons";

export function InputParticipante({ onAdd }: any) {
  const [participanteNome, setParticipanteNome] = useState("");
  const [isFocusParticipant, setIsFocusParticipant] = useState(false);
  const [isFilledParticipant, setIsFilledParticipant] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleAdd = () => {
    if (participanteNome.trim() !== "") {
      onAdd(participanteNome.trim());
      setParticipanteNome("");
      setIsFilledParticipant(false);
    } else {
      handleChangeText(participanteNome);
    }
  };

  const handleFocus = () => {
    setIsFocusParticipant(true);
  };

  const handleBlur = () => {
    setIsFocusParticipant(false);
  };

  const handleChangeText = (text: any) => {
    setIsFilledParticipant(!!text);
  };

  const handlePressIn = () => {
    setIsFocusParticipant(true);
    inputRef.current?.focus();
  };

  const handlePressOut = () => {
    setIsFocusParticipant(false);
  };

  return (
    <>
      <Text
        key="TextParticipante"
        style={
          isFocusParticipant || isFilledParticipant
            ? styles.textTitle1
            : styles.textTitle
        }
      >
        Nome do Participante:
      </Text>

      <View style={styles.formParticipante}>
        <IconM
          name="person-add"
          size={20}
          style={
            isFocusParticipant || isFilledParticipant
              ? styles.icon1
              : styles.icon
          }
        />
        <Pressable
        onPress={handlePressIn}
        style={styles.inputButtonClickMask}
        >
          <TextInput
            ref={inputRef}
            style={
              isFocusParticipant || isFilledParticipant
                ? styles.inputParticipante1
                : styles.inputParticipante
            }
            placeholderTextColor="#6B6B6B"
            placeholder="Insira um participante"
            keyboardAppearance="dark"
            inputMode="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={participanteNome}
            onChangeText={(text) => {
              handleChangeText(text);
              setParticipanteNome(text);
            }}
          />
        </Pressable>
        <Pressable
          key="buttonAdd"
          onPress={handleAdd}
          style={styles.buttonAdd}
          accessible={true}
          role="button"
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Icon name="plus" {...iconStyles} />
        </Pressable>
      </View>
    </>
  );
}

import React, { useState, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "react-native-ui-datepicker";
import { styles, theme } from "./styles";

export function InputDateEvent({ onAddDate }: any) {
  const inputRefDate = useRef<TextInput>(null);
  const [isFocusDate, setIsFocusDate] = useState(true);
  const [isFilledDate, setIsFilledDate] = useState(true);
  const [value, setValue] = useState(new Date().toISOString().split("T")[0]);
  const [open, setOpen] = useState(false);

  const formattedDate = (value: any) => {
    if (!value) {
      return value;
    }

    if (value === "undefined-01-2") {
      return value;
    }

    if (value.lenght < 10) {
      return value;
    }

    const formattedDate = value.toString().split(" ")[0];
    const [year, month, day] = formattedDate.split("-");
    const invertedDate = `${day}-${month}-${year}`;

    if (invertedDate === "undefined-01-2") {
      return value;
    }

    return invertedDate;
  };

  const handleBlur = () => {
    setIsFocusDate(false);
  };

  const handleChangeText = (selectedDate: any) => {
    if (selectedDate === undefined) {
      onAddDate("");
      setValue("");
      setIsFocusDate(false);
      setIsFilledDate(false);
      return;
    }

    if (selectedDate === "undefined-01-2") {
      onAddDate("");
      setValue("");
      setIsFocusDate(false);
      setIsFilledDate(false);
      return;
    }

    if (!selectedDate) {
      setIsFocusDate(false);
      setIsFilledDate(false);
      onAddDate("");
      setValue("");
      return;
    } else {
      const formattedDate = selectedDate.toString().split(" ")[0];
      const [year, month, day] = formattedDate.split("-");
      const invertedDate = `${day}-${month}-${year}`;

      if (invertedDate.length !== 10) {
        onAddDate("");
        setValue("");
        setIsFocusDate(false);
        setIsFilledDate(false);
        return;
      }

      setIsFocusDate(true);
      setIsFilledDate(true);
      onAddDate(invertedDate);
      setValue(formattedDate);
      setOpen(false);
      return;
    }
  };

  const handlePressIn = () => {
    setIsFocusDate(true);
    setIsFilledDate(true);
    inputRefDate.current?.focus();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
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
        <Pressable
          onPress={handlePressIn}
          onPressOut={handleBlur}
          style={styles.inputButtonClickMask}
        >
          <TextInput
            ref={inputRefDate}
            key="InputDate"
            style={isFocusDate || isFilledDate ? styles.input1 : styles.input}
            placeholderTextColor="#6B6B6B"
            keyboardAppearance={theme}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            value={formattedDate(value)}
            editable={false}
            selectTextOnFocus={false}
          />
        </Pressable>
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={open}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <DateTimePicker
                value={value}
                mode="date"
                onValueChange={handleChangeText}
                locale="en"
                displayFullDays
                minimumDate={new Date()}
                todayTextStyle={{ color: "#fff", fontWeight: "bold" }}
                headerTextStyle={{ color: "#fff" }}
                calendarTextStyle={{ color: "#fff", fontSize: 12 }}
                weekDaysTextStyle={{ color: "#fff" }}
                selectedTextStyle={{ color: "#fff" }}
                timePickerTextStyle={{ color: "#fff" }}
                headerButtonColor="#fff"
                headerButtonStyle={{
                  backgroundColor: "rgba(0, 128, 255, 1)",
                  borderRadius: 10,
                }}
                yearContainerStyle={{
                  backgroundColor: "rgba(0, 128, 255, 1)",
                  borderRadius: 10,
                }}
                monthContainerStyle={{
                  backgroundColor: "rgba(0, 128, 255, 1)",
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 20,
  },

  textTitle: {
    color: "#dee2e6",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 40,
  },

  textTitle1: {
    color: "#50Cf69",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 40,
  },

  textInvalid: {
    color: "lightcoral",
  },

  input: {
    marginTop: 5,
    backgroundColor: "#1f1e25",
    height: 40,
    borderRadius: 10,
    color: "#f0f8ff",
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#9999",
    flex: 1,
  },

  input1: {
    marginTop: 5,
    backgroundColor: "#1f1e29",
    height: 40,
    borderRadius: 10,
    color: "#50Cf69",
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#50Cf69",
    flex: 1,
  },

  placeholderTextColorStyles: {
    color: "#6B6B6B",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
    color: "#f0f8ff",
  },

  icon1: {
    marginRight: 10,
    color: "#50Cf69",
  },

  inputButtonClickMask: {
    margin: 5,
    padding: 0,
    flex: 1,
    width: "100%",
    height: 50,
    justifyContent: "center",
  },

  validationMessage: {
    color: "lightcoral",
    fontSize: 10,
    marginLeft: 40
  },

  inputInvalid: {
    borderColor: "lightcoral",
    color: "lightcoral",
  },
});

export const theme = "dark";

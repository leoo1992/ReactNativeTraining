import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },

  textEmptyList: {
    flex: 1,
    color: "#f0f8ff",
    textAlign: "center",
    fontSize: 12,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },

  emptyList: {
    marginTop: 40,
    backgroundColor: "#333",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    width: "100%",
    height: "100%",
    padding: 10,
    borderRadius: 10,
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 0,
    margin: 0,
  },

  textDialog: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f0f8ff",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  dialogButtonsGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    padding: 10,
  },

  dialogButtonText: {
    color: "#f0f8ff",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  dialogButtonSim: {
    flex: 0.5,
    backgroundColor: "#E23C44",
    borderRadius: 10,
    padding: 5,
    color: "#fff",
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  
  dialogButtonNão: {
    flex: 0.5,
    backgroundColor: "#50Cf69",
    marginRight: 10,
    borderRadius: 10,
    padding: 5,
    color: "#fff",
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  flatList: {
    backgroundColor: "#292929",
    padding: 5,
    margin: 10,
  },
});

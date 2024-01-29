import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 
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
});

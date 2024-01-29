import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  textDialog: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#f0f8ff",
  },

  textDialogValue: {
    color: "#999",
    fontSize: 12,
  },

  textDialogTitle: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#50Cf69",
    marginBottom: 10,
    backgroundColor: "#1f1e25",
    padding: 5,
    borderRadius: 10,
  },

  textDialogTitle2: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#50Cf69",
    backgroundColor: "#1f1e25",
    padding: 5,
    borderRadius: 10,
  },

  dialogButtonsGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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

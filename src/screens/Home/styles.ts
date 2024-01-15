import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },

   textEmptyList: {
    flex: 1,
    color: "#f0f8ff",
    textAlign: "center",
    fontSize: 16,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },

  emptyList: {
    marginTop: 100,
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
    padding: 20,
    borderRadius: 10
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 0,
    margin: 0
  },

  textDialog: {
    fontSize: 16,
    fontWeight: "bold",
  },

  dialogTheme: {
    backgroundColor: "#333",
    background: "#333",
    padding: 10,
    margin: 0,
    borderWidth: 0
  }

});

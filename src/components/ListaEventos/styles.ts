import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  containerEvent: {
    backgroundColor: "#555555",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 5,
    flexDirection: "row",
  },

  textEvent: {
    color: "#dee2e6",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },

  textEvent2: {
    color: "#dee2e6",
    fontSize: 12,
  },

  listParticipants: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    width: "100%",
    marginTop: 5,
  },

  iconDelete: {
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: 25,
  },

  buttonDelete: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    borderColor: "#999",
    borderWidth: 1,
    width: 30,
    height: 30,
    margin: 0,
    paddingVertical: 5,
  },

  dragIndicator: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    fontSize: 20,
    margin: 0,
    paddingVertical: 5,
    backgroundColor: "#000",
    borderRadius: 5,
    borderColor: "#999",
    borderWidth: 1,
    color: "white",
  },

});

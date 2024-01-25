import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 10,
    justifyContent: "center",
  },

  containerApp2: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 10,
  },

  containerEvent: {
    backgroundColor: "#555555",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 5,
  },

  textEvent: {
    color: "#dee2e6",
    fontSize: 14,
    fontWeight: "bold",
  },

  textEvent2: {
    color: "#dee2e6",
    fontSize: 14,
  },

  textEvents: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    flex: 1,
  },

  textEventEmpty: {
    color: "#dee2e6",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  listParticipants: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    marginTop: 5,
    width: "80%",
  },

  icon: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    marginLeft: 5,
  },

  containerParticipants: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconPlus: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    textAlign: "center",
  },

  buttonPlus: {
    backgroundColor: "#000",
    marginTop: 20,
    borderRadius: 25,
    height: 50,
    width: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    borderWidth: 1,
    borderColor: "lime",
  },

  iconDelete: {
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: 15,
  },

  buttonDelete: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#000",
    borderRadius: 25,
    padding: 5,
    borderColor: "#999",
    borderWidth: 1,
    width: 30,
    height: 30,
    margin: 0,
  },
});

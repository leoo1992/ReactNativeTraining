import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: "#212529",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    marginTop: 60,
  },

  containerApp2: {
    flex: 1,
    backgroundColor: "#212529",
    paddingHorizontal: 10,
    margin: 0,
  },

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
  },

  textEvent2: {
    color: "#dee2e6",
    fontSize: 12,
  },

  textEvents: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    flex: 1,
  },

  textEventEmpty: {
    color: "#dee2e6",
    fontSize: 12,
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
    width: "100%",
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
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 25,
    borderColor: "#999",
    borderWidth: 1,
    width: 30,
    height: 30,
    margin: 0,
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

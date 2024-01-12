import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 20
  },

  textTitle: {
    color: "#dee2e6",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 5
  },
  

  input: {
    marginTop: 5,
    backgroundColor: "#1f1e25",
    height: 50,
    borderRadius: 10,
    color: "#f0f8ff",
    padding: 15,
    fontSize: 14,
    borderWidth: 1, 
    borderColor: "#9999", 
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
  }

});

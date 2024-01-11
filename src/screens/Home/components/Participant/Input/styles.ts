import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  textTitle: {
    color: "#dee2e6",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 15
  },
  
  textButton: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5
  },

  buttonAdd: { 
    backgroundColor: "#50Cf69",
    borderRadius: 10,
    height: 45,
    width: 45,
    marginRight: 5,
    alignSelf: "center", 
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContentSelf: "center",
    verticalAlign: "middle",
    borderWidth: 3, 
    borderColor: "#9999", 
  },

  inputParticipante: {
    flex: 1,
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 15,
    backgroundColor: "#1f1e25",
    height: 50,
    borderRadius: 10,
    color: "#f0f8ff",
    padding: 15,
    fontSize: 16,
    borderWidth: 1, 
    borderColor: "#9999", 
  },

  formParticipante: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }

});

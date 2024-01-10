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
    marginTop: 20,
    marginLeft: 15
  },
  
  textButton: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContentSelf: "center",
    verticalAlign: "middle",
    margin:0,
    padding:0,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 31,
    width: 31,
    borderWidth: 0,
    includeFontPadding: false,
    fontWeight: "bold",
    fontStyle: "normal"
  },

  buttonAdd: { 
    backgroundColor: "#1f1e25",
    borderRadius: 10,
    height: 50,
    width: 50,
    alignSelf: "center", 
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContentSelf: "center",
    verticalAlign: "middle",
    borderWidth: 1, 
    borderColor: "#9999", 
  },

  input: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#1f1e25",
    height: 50,
    borderRadius: 10,
    color: "#f0f8ff",
    padding: 15,
    fontSize: 16,
    borderWidth: 1, 
    borderColor: "#9999", 
  },

  inputParticipante: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: "#1f1e25",
    height: 50,
    borderRadius: 10,
    color: "#f0f8ff",
    padding: 15,
    fontSize: 16,
    borderWidth: 1, 
    borderColor: "#9999", 
  }

});

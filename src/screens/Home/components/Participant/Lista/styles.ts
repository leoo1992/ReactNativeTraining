import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerLista: {
        width: '100%',
        backgroundColor: '#1f1e25',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        borderWidth: 1, 
        borderColor: "#9999", 
        flexDirection: "row",
        padding: 5
    },

    nameParticipante: {
        flex: 1,
        color: '#dee2e6',
        fontSize: 16,
        marginLeft: 15,
        verticalAlign: 'middle'
    },

    buttonRemove: {
        backgroundColor: '#E23C44',
        borderRadius: 10,
        height: 45,
        width: 45,
        alignSelf: "center", 
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContentSelf: "center",
        verticalAlign: "middle",
        borderWidth: 3, 
        borderColor: "#9999", 
    },

    textButton: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 10
      },

});

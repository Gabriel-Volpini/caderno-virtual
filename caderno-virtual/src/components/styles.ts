import { StyleSheet } from 'react-native';

export const sModalCadastrar = StyleSheet.create({
    overlayContent:{
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonCadastrar:{
        backgroundColor: "#8E4DFF",
        width:"80%",
        height:40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius:25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textCadastrar:{
        color:"#FFF",
        fontSize: 16,
        fontWeight:"700"
    },

    diaSemanaWrapper:{
        marginTop:10,
        marginLeft:20,
        height:20,
        width:"100%",
        flexDirection:"row"
    },
    diaSemana: {
        marginRight: 20,
        fontSize: 15,
    }
})

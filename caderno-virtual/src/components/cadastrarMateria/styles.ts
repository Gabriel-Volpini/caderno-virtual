import { StyleSheet } from 'react-native';

export const sModalCadastrar = StyleSheet.create({
    overlayContent:{
        marginTop: 20,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:10
    },
    buttonCadastrar:{
        backgroundColor: "#8E4DFF",
        width:"80%",
        height:40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
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
    diaSemanaWrapper: {
        marginVertical: 10,
        justifyContent: "space-between",
        height: 20,
        width: "100%",
        flexDirection: "row"
    },

    horarioWrapper: {
        width: "100%",
        flex: 1,
        borderTopWidth:1,
        paddingTop:5,
        borderTopColor: "#e8e8e8",
    }
})

export const sDiaSemanaItem = StyleSheet.create({
    diaSemana: {
        fontSize: 15,
    },
})

export const sHorarioAulaItem = StyleSheet.create({
    horarioBox:{
        flex: 1, 
        margin: 5, 
        height: 100,
        borderRadius:5,
        alignItems:"center",

        borderColor:"#DA70D6",
        borderWidth:1
    },

    day:{
        fontSize:15,
        color: "#940eee",
        fontWeight: "900",
        textDecorationLine:"underline",
    },
    textHorarioWrapper:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:20,
        width:"100%",
        paddingHorizontal:10,
        flexDirection:"row",
    },
    horario:{
        fontSize: 32,
        color: "#8E4DFF",
        fontWeight: "bold"
    }
})
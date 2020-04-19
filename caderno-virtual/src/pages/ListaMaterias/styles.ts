import {StyleSheet} from 'react-native';

export const sListaMaterias = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FF',
        alignItems: "center", 
        justifyContent: "center",
        position:"relative"
    },
    
    
});

export const sEmpty = StyleSheet.create({
    image: {
        width: "100%",
        height: 340,
    },

    text: {
        position: "absolute",
        top: 20,
        fontWeight: "600",
        fontSize: 15,
        color: "#707070",
    },
    button: {
        backgroundColor: "#927ADB",
        height: 50,
        marginTop:5,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom:10,
        right:10,
        left:10,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        color: "#FFF",
        marginLeft: 5,
        fontWeight: "700"

    }
})
import {StyleSheet} from 'react-native';

export const sMain = StyleSheet.create({
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
    },
    buttonText: {
        fontSize: 16,
        color: "#FFF",
        marginLeft: 5
    }
})

export const sCamera = StyleSheet.create({
    cameraScreen: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    
    flipButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    flipText:{
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white'
    },

    closeButton:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginLeft:30
    },
    closeText:{
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white'
    },
});
import {StyleSheet} from 'react-native';

export const sMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: "center", 
        justifyContent: "center",
        position:"relative"
    },
    
    button: {
      backgroundColor: "#7D40E7",
      margin: 10,
      borderRadius: 5,
      width: 150,
      height: 150,
      shadowColor: "black",
    }
});

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
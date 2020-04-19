import {StyleSheet} from 'react-native';

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
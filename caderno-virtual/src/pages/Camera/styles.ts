import {StyleSheet} from 'react-native';

export const sCamera = StyleSheet.create({
    content: {
        flex: 1,
        position: 'relative',
    },

    cameraScreen: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    zoomWrapper:{
        position: 'absolute',
        bottom: '50%',
        right: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90,
    },

    cameraBottomWrapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
    },

    cameraButton: {
        height: 55,
        width: 55,
        borderRadius: 20,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',

    },

    flashButton: {
        position: 'absolute',
        left: 25,
        bottom: 60,
    },

    flipButton: {
        position: 'absolute',
        left: 20,
        bottom: 15,
    },

});




// zoomInText: {
//     fontSize: 18,
//         marginBottom: 10,
//             color: 'white',
    
//     },

// zoomOutText: {
//     fontSize: 25,
//         marginBottom: 10,
//             color: 'white',
//     },
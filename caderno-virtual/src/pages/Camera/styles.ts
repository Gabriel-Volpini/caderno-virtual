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
    
    flipButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    flipText:{
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white'
    },

    zoomWrapper:{
        position: 'absolute',
        bottom: '50%',
        right: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90,
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
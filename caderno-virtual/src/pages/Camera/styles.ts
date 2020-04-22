import { StyleSheet } from 'react-native';

export const sCamera = StyleSheet.create({
    content: {
        flex: 1,
        position: 'relative',
    },

    photo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },

    cancel: {
        position: 'absolute',
        left: 25,
        bottom: 15,
    },

    confirm: {
        position: 'absolute',
        bottom: 20,
        right: 25,
    },

    cameraScreen: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    zoomWrapper: {
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
        bottom: 15,
    },

    flipButton: {
        position: 'absolute',
        right: 20,
        top: 15,
    },

    Gallery: {
        position: 'absolute',
        right: 20,
        bottom: 15,
    },

});
import {StyleSheet} from 'react-native';

export const sAulas = StyleSheet.create({
    aulaScreen: {
        flex: 1,
    },

    calendarIcon:{
        width:30,
        height:30
    },

    input:{
        backgroundColor:"red",
        borderColor:"black",
        borderWidth:1,
        flex: 1,
    },
});

export const sOverlayVizualizar = StyleSheet.create({
    overlay:{
        padding: 0, 
        overflow: "hidden" 
    },
    diaTitle:{
        fontSize: 25, 
        marginTop: 10, 
        marginLeft: 10 
    },
    scrollView:{
        padding:10
    }

})
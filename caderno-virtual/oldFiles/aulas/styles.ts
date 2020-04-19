import {StyleSheet} from 'react-native';

export const sAulas = StyleSheet.create({
    listItem: {
        flex: 1,
    },

    listContainer: {
        padding:0, 
        height:70, 
        paddingHorizontal: 15
    },

    calendarIcon:{
        width:30,
        height:30
    },

    listTitleWrapper:{
        flex: 1,
        justifyContent: "center"  
    },

    listTitle:{
        fontSize:18
    },

    listTitleSubtitle:{
        fontSize:13,
        color:"grey"
    },

    addButton:{
        backgroundColor:"#8E4DFF",
        borderRadius:25,
        width:35,
        height:35,
        alignItems:"center",
        justifyContent:"center",
    }
});

export const sOverlayVizualizar = StyleSheet.create({
    overlay:{
        padding: 0, 
        overflow: "hidden",
        borderColor: "#E8e8e8",
        borderWidth: 1,
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
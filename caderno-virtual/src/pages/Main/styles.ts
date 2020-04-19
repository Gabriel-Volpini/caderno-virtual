import { StyleSheet } from 'react-native';

export const sMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FF',
        position: "relative",
        justifyContent:'space-between'
    },

    column:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
        paddingHorizontal:20
    },

    item:{
        backgroundColor: "#927ADB",
        width: '45%',
        height: "80%",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },

    itemTextWrapper:{
        marginTop: 10
    },

    itemText:{
        color:"#FFF",
        fontSize: 18,
        fontWeight:"700"
    }
});

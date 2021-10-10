import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    fab: {
        position:'absolute',
        right:25,
        bottom: 60,
        padding: 5,
        
    },

    markerImage: {
        width: 60,
        height: 60
    },
    icon:{

        marginTop: 4
    },

    flexCenterColum:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    activityindicator: {
        marginBottom: 30,
        marginTop: 30,
        fontSize: 20,
        fontStyle: 'italic'
    }
   
   
})
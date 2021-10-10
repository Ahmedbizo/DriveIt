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
        marginTop: 40,
        fontSize: 20,
        fontStyle: 'italic'
    },
    cancelDeliveryButton: {
        bottom: 10,
        width: "96%",
        position: 'absolute',
        padding: 7,
        borderRadius:40,
    },

    confirmAndCancelButtun:{
        margin: 10,
        marginTop: 20,
        justifyContent: 'center'
    },

    headertext: {
        marginBottom: 20
    }
   
   
})
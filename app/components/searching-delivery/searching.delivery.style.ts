import { StyleSheet } from "react-native";

export const searchingDeliveryStyle = StyleSheet.create({

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

})
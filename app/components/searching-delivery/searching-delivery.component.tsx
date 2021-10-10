import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { searchingDeliveryStyle } from './searching.delivery.style';



export const SearchingDeliveryComponent = () =>{

    return( 

        <View style={searchingDeliveryStyle.flexCenterColum}>

        <ActivityIndicator 
        animating={true}
        size={40}/>
        <Text style={searchingDeliveryStyle.activityindicator}> Searching For a Delivery  Person </Text>
        <Button  style={searchingDeliveryStyle.cancelDeliveryButton} mode='contained'>
           Cancel
        </Button>
    </View>
    )

}
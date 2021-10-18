import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';
import { Card, Text } from 'react-native-paper';

import { HeaderComponent } from '../../components/header/header.component';
import { DeliveryStyle } from './delivery.style';

const DeliveryScreen = () => {


    return( 

        <SafeAreaView style={DeliveryStyle.flex}>

            <HeaderComponent title=" Delivery details " hasBackButton={true}/>
            <View style={DeliveryStyle.flex}>

                <MapView 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                    
                }}
                style={DeliveryStyle.flex}
                > 
                
                </MapView>
            </View>

            <Card>
                <Card.Title
                title={"01/02/2021"}
                right={()=>
                <Text>$ 30.00</Text>
                
                }>

                </Card.Title>
            </Card>
        </SafeAreaView>
    )
}

export default DeliveryScreen;
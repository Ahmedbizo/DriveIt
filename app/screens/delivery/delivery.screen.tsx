import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';

import { HeaderComponent } from '../../components/header/header.component';

const DeliveryScreen = () => {


    return( 

        <SafeAreaView>

            <HeaderComponent title=" Delivery details " hasBackButton={true}/>
            <View>

                <MapView 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                
                ></MapView>
            </View>
        </SafeAreaView>
    )
}

export default DeliveryScreen;
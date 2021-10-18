import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';
import { Avatar, Card, List, Text } from 'react-native-paper';

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

            <Card style={DeliveryStyle.card}>
                <Card.Title
                style={DeliveryStyle.cardText}
                title={"18/10/2021"}
                right={()=>
                <Text style={DeliveryStyle.price}>$ 30.00</Text>
                
                }>

                </Card.Title>
                <Card.Content>
                    <List.Item 
                    title={"David Jon"}
                    description="63 Delivery"
                    left={()=>
                    
                        <Avatar.Image
                        size={55}
                        source={{uri : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}
                        />
                    }
                    />
                    
                    
                </Card.Content>
            </Card>

            <Card style={DeliveryStyle.card}>
            <Card.Content>
                   
                    <List.Item
                    title="Origin"
                    description="Gustaf-Street 50"
                    left={()=> 
                        <List.Icon  icon="flag-outline"/>
                    }
                    />

                <List.Item
                    title="Destination"
                    description="Certral-Station 34"
                    left={()=> 
                        <List.Icon  icon="flag-checkered"/>
                    }
                    />
                    
                </Card.Content>

            </Card>
        </SafeAreaView>
    )
}

export default DeliveryScreen;
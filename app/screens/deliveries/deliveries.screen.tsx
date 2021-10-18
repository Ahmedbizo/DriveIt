import React from 'react';
import { SafeAreaView } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';


const DeliveriesScreen = () => {

    return(
        <SafeAreaView>

            <HeaderComponent title="My Deliveries" hasBackButton={true}/>
            <Card>
                <Card.Cover 
                source={{uri: "https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939"}}
                />
                <Card.Title 
                    title="18/10/2021"
                    subtitle="David jon "
                    right={() => 
                    <Text> $ 30.00</Text>
                    }/>
            </Card>
        </SafeAreaView>
    )
}

export default DeliveriesScreen;
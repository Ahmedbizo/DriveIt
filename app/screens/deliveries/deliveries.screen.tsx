import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';


const DeliveriesScreen = () => {

    return(
        <SafeAreaView>

            <HeaderComponent title="My Deliveries" hasBackButton={true}/>
        </SafeAreaView>
    )
}

export default DeliveriesScreen;
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';

const DeliveryScreen = () => {


    return( 

        <SafeAreaView>

            <HeaderComponent title=" Delivery details " hasBackButton={true}/>
        </SafeAreaView>
    )
}

export default DeliveryScreen;
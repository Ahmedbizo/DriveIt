import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { DeliveriesSryle } from './deliveries.style';


const DeliveriesScreen = () => {

    const deliveries: number [] = [1,2,3,4,5,6,7,8,9];

    return(
        <SafeAreaView >

            <HeaderComponent title="My Deliveries" hasBackButton={true}/>
            <FlatList
               data={deliveries}
               keyExtractor={(item,index) => `deliveries${index}`}
               renderItem={({item,index}) => 
            
               <Card style={DeliveriesSryle.card}>
               <Card.Cover 
               source={{uri: "https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939"}}
               />
               <Card.Title 
                   title="18/10/2021"
                   subtitle="David jon "
                   
                   
                   right={() => 
                   <Text style={DeliveriesSryle.cardText}> $ 30.00</Text>
                   }
                   
                   left={() =>
                   <Avatar.Image
                       size={50}
                       source={{uri : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}
                       />
                   }
                   />
                   
           </Card>
            
            }
           />

           
            
            
        </SafeAreaView>
    )
}

export default DeliveriesScreen;
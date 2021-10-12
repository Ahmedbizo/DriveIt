import React from 'react';
import { Image, SafeAreaView} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import {FAB} from 'react-native-paper';
import { homeStyle } from './home.style';
import {ConfirmDeliveryCardComponent} from '../../components/comfirn-delivery-card/confirm-delivery-card.component';
import { SearchingDeliveryComponent} from '../../components/searching-delivery/searching-delivery.component';
import { HeaderComponent } from '../../components/header/header.component';


const HomeScreen = () => {

    const state: number = 3;

    return (

        <SafeAreaView style={homeStyle.flex}>
            <HeaderComponent title="HeelpOO" />


     <MapView style={homeStyle.flex}
     region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>

      {
          state == 1 ? 

          <>

          <Marker 
          description="Delivery"
          coordinate={{  latitude: 37.79525,longitude: -122.4315}}>
          <Image 
          style={homeStyle.markerImage}
          source={ require ("../../../assets/car.png")}/>

        </Marker>

        <Marker 
                description="Delivery"
                coordinate={{  latitude: 37.78140,longitude: -122.4332}}>
                <Image 
                style={homeStyle.markerImage}
                source={ require ("../../../assets/car.png")}/>

        </Marker>
        <Marker 
                description="Delivery"
                coordinate={{  latitude: 37.78910,longitude: -122.4355}}>
                <Image 
                style={homeStyle.markerImage}
                source={ require ("../../../assets/car.png")}/>

        </Marker>
        <Marker 
                description="Delivery"
                coordinate={{  latitude: 37.78855,longitude: -122.4355}}>
                <Image 
                style={homeStyle.markerImage}
                source={ require ("../../../assets/car.png")}/>

        </Marker>
        <Marker 
                description="Delivery"
                coordinate={{  latitude: 37.78355,longitude: -122.4355}}>
                <Image 
                style={homeStyle.markerImage}
                source={ require ("../../../assets/car.png")}/>

        </Marker>
        </>
        : null
      }




{
          state == 2 ? 

          <>

          <Marker 
          description="Origin"
          coordinate={{  latitude: 37.78819,longitude: -122.4315}}>
         

        </Marker>

        <Marker 
                description="Distination "
                coordinate={{  latitude: 37.78821,longitude: -122.4340}}>
               

        </Marker>
      
        </>
        : null
      }


{ 
      
      state == 2 ? 

     <ConfirmDeliveryCardComponent/>
      : null

    }
      

     
           

     </MapView>

     { 
     
        state == 1 ? 

        <FAB
        icon="plus" color="white" 
        style={homeStyle.fab}
        />
        : null

     }

     { 
     
     state == 3 ? 

    <SearchingDeliveryComponent/>

     : null
     } 
    
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
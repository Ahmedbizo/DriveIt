import React from 'react';
import { Image, SafeAreaView} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import { FAB } from 'react-native-paper';
import { homeStyle } from './home.style';


const HomeScreen = () => {

    return (

        <SafeAreaView style={homeStyle.flex}>


     <MapView style={homeStyle.flex}
     region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>

          <Marker 
          description="Delivery"
          coordinate={{  latitude: 37.78825,longitude: -122.4324}}>
              <Image 
              style={homeStyle.markerImage}
              source={ require ("../../../assets/car.png")}/>

      </Marker>

     </MapView>
     <FAB
     icon=""
     style={homeStyle.fab}
     />
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
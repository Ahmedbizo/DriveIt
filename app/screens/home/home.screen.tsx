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
                    coordinate={{  latitude: 37.78819,longitude: -122.4315}}>
                    <Image 
                    style={homeStyle.markerImage}
                    source={ require ("../../../assets/car.png")}/>

          </Marker>

          <Marker 
                    description="Delivery"
                    coordinate={{  latitude: 37.78821,longitude: -122.4321}}>
                    <Image 
                    style={homeStyle.markerImage}
                    source={ require ("../../../assets/car.png")}/>

          </Marker>
          <Marker 
                    description="Delivery"
                    coordinate={{  latitude: 37.78845,longitude: -122.4340}}>
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

     </MapView>
     <FAB
     icon=""
     style={homeStyle.fab}
     />
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
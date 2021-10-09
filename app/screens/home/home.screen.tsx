import React from 'react';
import { SafeAreaView} from 'react-native';
import MapView from 'react-native-maps'; 
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
      }}
     
     />
     
     <FAB
     icon=""
     style={homeStyle.fab}
     />
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
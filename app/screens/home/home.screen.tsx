import React from 'react';
import { SafeAreaView, View , StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
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
     
     
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
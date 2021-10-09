import React from 'react';
import { SafeAreaView, View , StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 


const HomeScreen = () => {

    return (

        <SafeAreaView style={{ flex: 1}}>


     <MapView style={{flex: 1}}/>
     
     
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
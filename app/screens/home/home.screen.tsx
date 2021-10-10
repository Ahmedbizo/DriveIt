import React from 'react';
import { Image, SafeAreaView, View} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import { Button, Card, FAB,IconButton,List } from 'react-native-paper';
import { homeStyle } from './home.style';


const HomeScreen = () => {

    const state: number = 2;

    return (

        <SafeAreaView style={homeStyle.flex}>


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
        </>
        : null
      }

      { 
      
        state == 2 ? 

        <Card>

            <Card.Content>
                <List.Item 
                title="15.00 $ "
                description= " Total Delivery Price "
                left ={() => 
                <IconButton
                icon="car"  // have to fix it 
                size={30} />
                }
                right={() => 

                    <View>

                        <Button >Cancel</Button>
                        <Button style={homeStyle.icon} mode="contained" >Confirm </Button>
                    </View>
                }
                />
            </Card.Content>
        </Card>
        : null

      }
           

     </MapView>

     { 
     
        state == 1 ? 

        <FAB
        icon="" // have to fix it 
        style={homeStyle.fab}
        />
        : null

     }
    
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
import React from 'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import { ActivityIndicator, Button, Card, FAB,IconButton,List } from 'react-native-paper';
import { homeStyle } from './home.style';


const HomeScreen = () => {

    const state: number = 3;

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

      <Card>

          <Card.Content >
              <List.Item 
              title="15.00 $ "
              description= " Total Delivery "
              left={() => 
            <IconButton
            icon=""
            />
            }

              right={() => 
              <View>
                    <Button mode='contained'>Confirm</Button>
                    <Button>Cancel</Button>
                  
                  
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

     { 
     
     state == 3 ? 

     <View style={homeStyle.flexCenterColum}>

         <ActivityIndicator 
         animating={true}
         size={40}/>
         <Text style={homeStyle.activityindicator}> Searching For a Delivery  Person </Text>
         <Button  style={homeStyle.cancelDeliveryButton} mode='contained'>
            Cancel
         </Button>
     </View>

     : null
     } 
    
   
   </SafeAreaView>
       
    )
};



export default HomeScreen;
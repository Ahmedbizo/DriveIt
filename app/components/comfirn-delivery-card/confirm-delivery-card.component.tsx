import React from "react";
import { View } from "react-native";
import { Button, Card, IconButton, List } from "react-native-paper";
import { confirmDeliveryCardStyle } from "./confirm-delivery-card.style";

export const ConfirmDeliveryCardComponent = () => {

    return( 

        <Card>

        <Card.Content >
            <List.Item 
             title="25.00 $ "
             description= " Total Delivery "
           
            left={() => 
          <IconButton
          icon="car"
          
          style={confirmDeliveryCardStyle.icon}
          />
          }
         

          right={() => 
            <View>
                <Button style={confirmDeliveryCardStyle.cancelBottun}>Cancel</Button>
                <Button mode='contained'>Confirm</Button>
                
                 
                  
            </View>

            }
            />
        </Card.Content>
    </Card>

    )
}
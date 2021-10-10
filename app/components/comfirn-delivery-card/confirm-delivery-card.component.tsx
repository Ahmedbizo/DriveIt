import React from "react";
import { View } from "react-native";
import { Button, Card, IconButton, List } from "react-native-paper";
import { confirmDeliveryCardStyle } from "./confirm-delivery-card.style";

export const ConfirmDeliveryCardComponent = () => {

    return( 

        <Card>

        <Card.Content >
            <List.Item 
           
            left={() => 
          <IconButton
          icon="bike"
          style={confirmDeliveryCardStyle.icon}
          />
          }
          title="15.00 $ "
          description= " Total Delivery "

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
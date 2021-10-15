import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, TextInput} from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { addressStyle } from "./address.style";

const AddressScreen = () => {

    return(
        <SafeAreaView>

            <HeaderComponent title="Address Screen" hasBackButton={true}/>
            <View style={addressStyle.marginHorizantal}>
                    <TextInput
                    label="Origin"/>
                    <TextInput label=" Destination "/>
             </View>
             <View>
                 <Button
                 icon="plus"
                 
                 >

                 </Button>
             </View>
        </SafeAreaView>
    )
}

export default AddressScreen;
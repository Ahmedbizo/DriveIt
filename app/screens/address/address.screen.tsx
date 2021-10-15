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
                 style={addressStyle.buttonIconadd}
                 labelStyle={addressStyle.buttonIconAddLableStyle}
                 >

                 </Button>
                 <Button
                    mode="contained"
                    uppercase={false}
                    style={addressStyle.readyButtonStyle}
                    labelStyle={addressStyle.readyButtonLableStyle}
                 >
                        Ready

                 </Button>
             </View>
        </SafeAreaView>
    )
}

export default AddressScreen;
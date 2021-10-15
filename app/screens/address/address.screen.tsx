import React from "react";
import { SafeAreaView } from "react-native";
import { TextInput} from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";

const AddressScreen = () => {

    return(
        <SafeAreaView>

            <HeaderComponent title="Address Screen" hasBackButton={true}/>
            <TextInput
            label="Origin"/>
            <TextInput label=" Destination "/>
        </SafeAreaView>
    )
}

export default AddressScreen;
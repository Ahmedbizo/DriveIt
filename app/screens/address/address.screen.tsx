import React from "react";
import { SafeAreaView } from "react-native";
import { Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";

const AddressScreen = () => {

    return(
        <SafeAreaView>

            <HeaderComponent title="Address Screen" hasBackButton={true}/>
        </SafeAreaView>
    )
}

export default AddressScreen;
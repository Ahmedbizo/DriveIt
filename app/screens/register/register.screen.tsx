import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";

export const RegisterScreen = () => {

    return(
         
        < SafeAreaView>
         
         <ScrollView>
            <Appbar>
                <Appbar.BackAction/>
                <Appbar.Content title='Register'/>
            </Appbar>

            <TextInput label='Name'/>
            <TextInput label= 'Email' keyboardType='email-address'/>
            <TextInput label='Password' secureTextEntry={true} right= {<TextInput.Icon name="eye-off-outline"/>} />
            <TextInput label='Confirm Password ' secureTextEntry={true} right= {<TextInput.Icon name="eye-off-outline"/>}/>
            <TextInput label='Phone Number' keyboardType='number-pad'/>
            <Button>Register</Button>

         </ScrollView>
        
        </SafeAreaView>

    );
}
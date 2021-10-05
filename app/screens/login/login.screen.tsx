import React from 'react';
import { SafeAreaView } from 'react-native';
import { Card , TextInput} from 'react-native-paper';



export const LoginScreen = () => {

    return(

        <SafeAreaView>
             
             <Card>
                <Card.Title title="Drive It"></Card.Title>

                <Card.Content>

                    <TextInput label='Email' keyboardType='email-address'></TextInput>
                    <TextInput label='Password' secureTextEntry={true}></TextInput>

                </Card.Content>

             </Card>



        </SafeAreaView>

    );
}
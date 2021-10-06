import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card , TextInput} from 'react-native-paper';
import { LoginStyle } from './login.style';



export const LoginScreen = () => {

    return(

        <SafeAreaView style={LoginStyle.content}>
             <View style={LoginStyle.view}>
             <Card>
                <Card.Title title="Drive It"></Card.Title>

                <Card.Content>

                    <TextInput label='Email' keyboardType='email-address'></TextInput>
                    <TextInput label='Password' secureTextEntry={true}></TextInput>
                    <Button uppercase={false}>Forget Email/Password</Button>
                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        LogIn
                    </Button>

                    <Button >Register</Button>

                </Card.Content>

             </Card>
             </View>



        </SafeAreaView>

    );
}
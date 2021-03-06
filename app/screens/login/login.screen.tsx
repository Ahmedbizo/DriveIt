import React from 'react';
import {  Alert, SafeAreaView,  View } from 'react-native';
import { Button, Card , TextInput} from 'react-native-paper';
import { LoginStyle } from './login.style';

//interface LoginScreenPorps {
 //navigation: any;
//}

export const LoginScreen = () => {

    const login = () => Alert.alert("Login ")
    //const register = () => props.navigation.navigate("Register")

    return(

        <SafeAreaView style={LoginStyle.content}>
          
             <View style={LoginStyle.view}>
             
             <Card style={LoginStyle.card}>
                <Card.Title title="HeelpOO" titleStyle={LoginStyle.cardTitle}></Card.Title>

                <Card.Content>

                    <TextInput label='Email' keyboardType='email-address'></TextInput>
                    <TextInput label='Password' secureTextEntry={true}></TextInput>
                    <Button  uppercase={false} style={LoginStyle.cardButton}>Forget Email/Password</Button>
                    <Button 
                    onPress={login}
                    mode="contained" 
                    style={LoginStyle.cardButton}>
                         LogIn
                         </Button>

                    <Button 
                    //onPress={register}
                    style={LoginStyle.cardButton}>Register</Button>

                </Card.Content>

             </Card>
             </View>



        </SafeAreaView>

    );
}


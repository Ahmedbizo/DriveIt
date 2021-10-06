import { ASSIGNMENT_OPERATORS } from "@babel/types";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";

export const RegisterScreen = () => {

    return(
         
        < SafeAreaView>
         
         <ScrollView>
            <Appbar>
                <Appbar.BackAction/>
                <Appbar.Content title='register'/>
            </Appbar>

         </ScrollView>
        
        </SafeAreaView>

    );
}
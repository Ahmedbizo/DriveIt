import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create ({
     content: {
         desplay:"flex",
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection:'row',
         backgroundColor: '#d7ccc8'
     },
     view: {
         width: "85%"
     },
     cardTitle: {
       
         color: '#8e24aa',
         position:'relative',
         alignItems: 'center',
         fontSize:30,
         textAlign: 'center',
         fontStyle:'italic'

     },
     cardButton: {
         margin: 2,
         marginLeft: 0,
         marginRight:0,
         padding:12,
         borderRadius:30,
         
         

     },
     card:{
        backgroundColor: '#fff',
        borderRadius:40,
        padding:25,
        
        
     },


})
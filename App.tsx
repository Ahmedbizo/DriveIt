import  React from 'react';



import { Provider as PaperProvider} from 'react-native-paper';
import { them } from './App.style';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screen';
import HomeScreen from './app/screens/home/home.screen';
import AddressScreen from './app/screens/address/address.screen';


const App = () => {


  return(
  <PaperProvider theme={them}>

    <AddressScreen/>
  </PaperProvider>

  );
};

export default App;
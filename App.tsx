import  React from 'react';



import { Provider as PaperProvider} from 'react-native-paper';
import { them } from './App.style';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screen';

const App = () => {


  return(
  <PaperProvider theme={them}>

    <LoginScreen/>
  </PaperProvider>

  );
};

export default App;
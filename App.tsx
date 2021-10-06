import  React from 'react';



import { Provider as PaperProvider, TextInput} from 'react-native-paper';
import { them } from './App.style';
import { LoginScreen } from './app/screens/login/login.screen';

const App = () => {


  return(
  <PaperProvider theme={them}>

    <LoginScreen/>
  </PaperProvider>

  );
};

export default App;
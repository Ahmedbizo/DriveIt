import  React from 'react';



import { Provider as PaperProvider, TextInput} from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';

const App = () => {


  return(
  <PaperProvider>

    <LoginScreen/>
  </PaperProvider>

  );
};

export default App;
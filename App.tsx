import { StatusBar } from 'react-native'
import { Loading } from './src/components/Loading';

import { GetStarted } from './src/screens/GetStarted';
import { Logon } from './src/screens/Logon'
import { SignIn } from './src/screens/SignIn'
import { Register } from './src/screens/Register';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  // Carregando as fontes
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Register /> : <Loading />}

    </>
  );
}

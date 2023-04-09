import { StatusBar } from 'react-native'
import { GetStarted } from './src/screens/GetStarted';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';

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

      {fontsLoaded ? <GetStarted />: <Loading />}
      
    </>
  );
}

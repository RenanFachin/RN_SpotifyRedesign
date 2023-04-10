import { StatusBar } from 'react-native'
import { Loading } from './src/components/Loading';

import { Routes } from './src/routes';

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

      {fontsLoaded ? <Routes /> : <Loading />}

    </>
  );
}

import { StatusBar } from 'react-native'
import { GetStarted } from './src/screens/GetStarted';

export default function App() {
  return (
    <>
      <GetStarted />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
